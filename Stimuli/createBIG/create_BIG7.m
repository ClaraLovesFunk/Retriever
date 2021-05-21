% EXCPLICIT SEQUENCES FOR RETRIEVER TI ONLINE

% To present stimuli and compute which feedback to give, we need a coherent
% explicit Excel-Sheet, that includes both, the sequence of presented
% values (sequence_of_pairs.xlsx) and stimuli info, that stores, which
% items are connected with the values and the paths leading to the items on
% the server.


%% CREATE TEMPLATE

% create a template called "big", where we insert all information (both
% strings and numbers
big=cell(616,18);
dictA=readtable('pathDictionaryA.xlsx');
dictA=table2cell(dictA);
dictB=readtable('pathDictionaryB.xlsx');
dictB=table2cell(dictB);

addpath(genpath('\\mpib-berlin.mpg.de\User\homes\wicharz\Desktop\create_BIG_Final'))


%% FILL OUT TEMPLATE
%% Column 1: Trial-Number
% Loop 1, p=1:80, big(:,18): Participants-No.
    % load the right data

% Loop 2, t=1:616
    % big(:,1)= Trial
    % big(:,16)= BlockNumber
    % big(:,17)= 
    % big(:,18)= Participants-Number

% Loop 3.1, c=2:3, big(:,2:3): values of item in P1 and P2

% Loop 3.2, r=1:8
    % Loop 3.2.1, c=4:5, big (:,4:5): item id of P1 and P2
        % (translating the sequence of values into the sequence of item 
        % names r for rows in the stimuliInfo table, c for columns in the 
        % sequence of values (column 1 stores values in position 1,
        % column 2 stores values in position 2.)
    % Loop 3.2.2, c=6:7, big (:,6:7): folder paths for P1 and P2 
    % Loop 3.2.3, c=8:9, big (:,8:9): item id for P1 and P2 
    % Loop 3.2.4, c=10:11, big (:,10:11): micro- and macrocategory of P1
    % Loop 3.2.5, c=12:13, big (:,12:13): micro- and macrocategory of P2
    % Loop 3.2.6, c=14:15, big (:,14:15): ID_sequence in P1 and P2

    
for p=1:100
    participant=num2str(p)
    
    % loading sequence
    seqName=['m_sequence_decision_' participant]
    load(seqName);
    seqValues=sequence_of_pairs;
    
    % load stimuli Info
    stimInfoName=['stimuli_info_' participant]
    load(stimInfoName);
    info=stimuli_info;
    
    for t=1:616
        % trial
        big(t,1)=num2cell(t);
        
        % block number
        big(t,16)=num2cell(seqValues(t,3));
        
        % inverse feedback
        big(t,17)=num2cell(seqValues(t,4));
        
        % participant-number
        big(t,18)=num2cell(p);
        
            
            for r=1:8
                % value P1 and P2
                for c=2:3
                    if seqValues(t,c-1)==r
                    big(t,c)=num2cell(info.value(info.ID_sequence==r));
                    end
                end
                
                % item name (e.g. 'elephant')
                for c=4:5
                    if seqValues(t,c-3)==r
                        big{t,c}=info.Item_Name((info.ID_sequence==r),:);
                    end
                end
                
                % path
                for c=6:7
                    if seqValues(t,c-5)==r
                        if info.folder(info.ID_sequence==r)=='A'
                            big(t,c)=dictA(info.Item_ID(info.ID_sequence==r),2);
                        else
                            big(t,c)=dictB(info.Item_ID(info.ID_sequence==r),2);
                        end
                    end
                    
                % ID P1 P2
                for c=8:9
                    if seqValues(t,c-7)==r
                        big(t,c)=num2cell(info.Item_ID(info.ID_sequence==r));
                    end
                end
                
                % Microcategory in P1 
                for c=10
                    if seqValues(t,1)==r
                        big(t,c)=num2cell(info.Micro_category(info.ID_sequence==r));
                    end
                end
                
                % Microcategory in P2
                for c=12
                    if seqValues(t,2)==r
                        big(t,c)=num2cell(info.Micro_category(info.ID_sequence==r));
                    end
                end
                
                % Macrocategory in P1 
                for c=11
                    if seqValues(t,1)==r
                        big(t,c)=num2cell(info.Macro_category(info.ID_sequence==r));
                    end
                end
                
                % Macrocategory in P2
                for c=13
                    if seqValues(t,2)==r
                        big(t,c)=num2cell(info.Macro_category(info.ID_sequence==r));
                    end
                end
              
                % ID_sequence
                for c=14:15
                    big(t,c)=num2cell(seqValues(t,c-13));        
                end
            end
        end
    end
    % export table
    BIG = cell2table(big, 'VariableNames',{'Trial' 'ValueP1' 'ValueP2' 'P1name' 'P2name' 'P1Loc' 'P2Loc' 'P1id' 'P2id' 'Micro_categoryP1' 'Macro_categoryP1' 'Micro_categoryP2' 'Macro_categoryP2' 'ID_sequenceP1' 'ID_sequenceP2' 'Block' 'InverseFb' 'pNumber'});
    bigName= ['conditions_main_' participant '.xlsx']
    writetable(BIG,bigName)
end

[NUMERIC,TXT,RAW]=xlsread('conditions_main_1.xlsx');








