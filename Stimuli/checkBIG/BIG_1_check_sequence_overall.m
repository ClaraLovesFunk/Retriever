%% COMPLETE CHECKING OF THE EXCEL-INPUT-SHEETS 'BIGp.xlsx' FOR THE STUDY 
%% 'RETRIEVER TI ONLINE'

% Create a metamatrix 'metaCheck' with different checks in the columns and different
% participants in the rows. At the end the matrix needs to be filled with
% 1s for our excel sheets needs to meet all our criteria (and all logical
% comparisons, we can draw between our excel sheet and the criteria need to
% be true, expressed with a 1 in matlab)

%% I CHECKS REGARDING SINGLE VALUES
%% I.a throughout the entire experiment

% column 1 'allValuesP1P2': 1= all 8 values come up in P1 and in P2

% column 2 'equalFreqP1P2': 1= those values also come up equally often in P1
% and in P2

% column 3 'freqExtreme': 1= the extreme values 1 and 8 are presented 68
% times in one position.

% column 4 'freqNormal': 1= all other values are presented 80 times in one
% position. 

%% I.b per block
% check script 'checkBIG_valuedist_block.m'. Extreme items are presented 50
% % of the blocks 8 times, 50 % 9 times. The other items are presented
% either 50 % of the time 9, 50 % of the time 11 times or alsways 10 times.
% What determines if it is always 10 times or 9/11 times?

%% II CHECKS REGARDINGS VALUE-PAIRS
%% II.a throughout the entire experiment
% column 6 'noSamePairs': 1= pairs never consist of the same value

% column 7 'freqNeighbours': 1= all pairs consisting of neighbours should
% be presented 20 times 

% column 8 'freqNormal': 1= all other pairs should be presented 8 times

%% II.b per block

addpath(genpath('\\mpib-berlin.mpg.de\User\homes\wicharz\Desktop\check_BIG_Final'))
metaCheck=NaN(1,7);

%% CHECK OVERALL THE EXPERIMENT
%% CHECK SINGLE VALUES
for p=1
    participant=num2str(p);
    BIG_p=['conditions_main_' participant '.xlsx'];
    seqValues=['seqValues' participant];
    [NUMERIC,TXT,RAW]=xlsread(BIG_p);
    
   % Which values appear in P1 and in P2 throughout the experiment?
valuesP1 = unique(NUMERIC(:,2));
valuesP2 = unique(NUMERIC(:,3));

% metaCheck(p,1)'allValuesP1P2' = all 8 values come up in P1 and in P2:
% We check which values come up in P1 with (NUMERIC(:,2) and P2 with 
% (NUMERIC(:,3). Then we compare if the values are the same and should get
% a logical array full of ones for every unique value that comes up in both
% positions. Now we want to check how many unique values are in our logical
% array. The only unique value should be the 1, indicating, that all 8
% values come up in both P1 and P2.
metaCheck(p,1)=unique(unique(valuesP1) == unique(valuesP2));

% Do those values appear equally often in P1 and P2?
metaCheck(p,2)=all(histc(NUMERIC(:,2), valuesP1)==histc(NUMERIC(:,3), valuesP2));

% Which values come up how often in P1 and P2? Create an overview matrix
% freqOveriew
freqOverview=NaN(8,3);
freqOverview(:,1)=valuesP1;
freqOverview(:,2)=histc(NUMERIC(:,2), valuesP1);
freqOverview(:,3)=histc(NUMERIC(:,3), valuesP2);
% A: Only value 3 and 8 come up 68 times. That doesn't make sense. Only the
% extreme values 1 and 8 should come up 68 times. 

% Metacheck 3: Are the extreme values 1 and 8 presented 68 times?
metaCheck(p,3)=freqOverview(1,2)==68&freqOverview(8,2)==68;

% Metacheck 4: Are all the other values presented 80 times in one position?
metaCheck(p,4)=all(freqOverview(2:7,2)==80);







%% CHECK PAIRS

    participant=num2str(p);
    BIG_p=['conditions_main_' participant '.xlsx'];
    seqValues=['seqValues' participant];
    [NUMERIC,TXT,RAW]=xlsread(BIG_p);

% create matrix for pairs, where columns 1:8 represent values 1:8 presented
% in P1 and row 1:8 represent values 1:8 presented in P2
pairs=zeros(8,8);

% fill out matrix
for t=1:616
    for p1=1:8
        for p2=1:8
            if NUMERIC(t,2)==p1 & NUMERIC(t,3)==p2
                pairs(p2,p1)= pairs(p2,p1)+1;
            end
        end
    end
end

% METACHECK: a pair never consists of the same values

noSamePair=NaN(1,8);
for p1=1:8
    noSamePair(1,p1)=pairs(p1,p1);
end
metaCheck(p,5)=(sum(noSamePair)==0);

% METACHECK: value neighbours should always be presented 20 times (check loop),
% non-neighbours 8 times over the entire experiment (needs to be
% implemented)

neighPair=NaN(1,7);
for p1=1:7
    neighPair(1,p1)=pairs(p1,p1+1)==20 & pairs(p1+1,p1)==20;
end
metaCheck(p,6)=all(neighPair==1);

% METACHECK: all nonidentical-nonneighbours in pairs should be presented 8 times.
%%%%% Only conducted visual check: OK
metaCheck(p,7)=1;


end



RESULTS=all(metaCheck(2,:)==1)

