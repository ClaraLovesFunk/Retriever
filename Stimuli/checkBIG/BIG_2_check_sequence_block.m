addpath(genpath('\\mpib-berlin.mpg.de\User\homes\wicharz\Desktop\check_BIG_Final'))
%% CHECK PER BLOCK

metaCheck=NaN(2,3);

%% CHECK SINGLE VALUES
for p=1
    participant=num2str(p);
    
    % loading BIG
    BIG_p=['conditions_main_' participant '.xlsx'];
    [NUMERIC,TXT,RAW]=xlsread(BIG_p);
    
    % loading sequence
    seqName=['m_sequence_decision_' participant]
    load(seqName);
    seqValues=sequence_of_pairs;
    
   % Which values appear in P1 and in P2 throughout the experiment?
    valuesP1 = unique(NUMERIC(:,2));
    valuesP2 = unique(NUMERIC(:,3));

    % Matrices for later use
    freqOverview1=zeros(8,8);
    freqOverview2=zeros(8,8);

    for t=1:616
        
        % Which values come up how often in P1 per block: create freqOverview with
        % rows being values and columns being blocks
        
        for blocks=1:8 
            for values=1:8
                if seqValues(t,3)==blocks;
                    if NUMERIC(t,2)==values;
                        freqOverview1(values,blocks)=freqOverview1(values,blocks)+1;
                    end
                    if NUMERIC(t,3)==values;
                        freqOverview2(values,blocks)=freqOverview2(values,blocks)+1;
                    end
                end
            end
        end
        
        % Metacheck: Visually inspecting the matrix freqOverview1 and freqOverview2 showed,
        % that each normal value is presented either 10 times in each block
        % or 9 times in half of the blocks and 11 times in half of the
        % other blocks. Extreme values 1 and 8 are presented half of the
        % block 8 times, half of the block 9 times. 
        metaCheck(p,1)=1;
        metaCheck(p,2)=1;
        
        
        % PAIRS
        % create matrix for pairs, where columns 1:8 represent values 1:8 presented
        % in P1 and row 1:8 represent values 1:8 presented in P2
        pairsB1=zeros(8,8);
        pairsB2=zeros(8,8);
        pairsB3=zeros(8,8);
        pairsB4=zeros(8,8);
        pairsB5=zeros(8,8);
        pairsB6=zeros(8,8);
        pairsB7=zeros(8,8);
        pairsB8=zeros(8,8);

        % block1
        for t=1:616
            for p1=1:8
                for p2=1:8
                    if NUMERIC(t,2)==p1 & NUMERIC(t,3)==p2;
                        if seqValues(t,3)==1;
                            pairsB1(p2,p1)= pairsB1(p2,p1)+1;
                        elseif seqValues(t,3)==2;
                            pairsB2(p2,p1)= pairsB2(p2,p1)+1;
                        elseif seqValues(t,3)==3;
                            pairsB3(p2,p1)= pairsB3(p2,p1)+1;
                        elseif seqValues(t,3)==4;
                            pairsB4(p2,p1)= pairsB4(p2,p1)+1;
                        elseif seqValues(t,3)==5;
                            pairsB5(p2,p1)= pairsB5(p2,p1)+1;
                        elseif seqValues(t,3)==6;
                            pairsB6(p2,p1)= pairsB6(p2,p1)+1;
                        elseif seqValues(t,3)==7;
                            pairsB7(p2,p1)= pairsB7(p2,p1)+1;
                        else 
                            pairsB8(p2,p1)= pairsB8(p2,p1)+1;
                        end
                    end
                end
            end
        end
    end
    
metaCheck(p,3)=1;
% Visual check: Pairs are not presented equally often through the blocks,
% but they all follow the same pattern: 0 identical pairs, normal pairs
% presented 1 time in a block and neighbours presented either 2 or 3 times,
% varying through the blocks. 

end
        
RESULTS=all(metaCheck(p,:)==1)        
