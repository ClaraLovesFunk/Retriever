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
metaCheck(p,1)=unique(unique(valuesP1) == unique(valuesP2))

% Do those values appear equally often in P1 and P2?
metaCheck(p,2)=all(histc(NUMERIC(:,2), valuesP1)==histc(NUMERIC(:,3), valuesP2))

end