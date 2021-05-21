%% OTHER CHECKS
% Since we're now checking strings as well, we need to take into account
% that the first row is researved for column headers and actual sequence
% info starts in row 2. 

metaCheck=NaN(2,11);

% load participant independent path dictionaries
dictA=readtable('pathDictionaryA.xlsx');
dictA=table2cell(dictA);
dictB=readtable('pathDictionaryB.xlsx');
dictB=table2cell(dictB);

for p=2
    % load participant-dependend BIG/'conditions_main'
    participant=num2str(p);
    BIG_p=['conditions_main_' participant '.xlsx'];
    seqValues=['seqValues' participant];
    [NUMERIC,TXT,RAW]=xlsread(BIG_p);
    
    % load partipant-dependend sequence and stimuli_info
    % loading sequence
    seqName=['m_sequence_decision_' participant]
    load(seqName);
    seqValues=sequence_of_pairs;
    % load stimuli Info
    stimInfoName=['stimuli_info_' participant]
    load(stimInfoName);
    info=stimuli_info;
  
        
        % ID P1
        checkID=NaN(1,616);
        for t=1:616
            checkID(1,t)=NUMERIC(t,8)==info.Item_ID(info.ID_sequence==seqValues(t,1));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,1)=all(checkID==1);
        
        % ID P2
        checkID2=NaN(1,616);
        for t=1:616
            checkID2(1,t)=NUMERIC(t,9)==info.Item_ID(info.ID_sequence==seqValues(t,2));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,2)=all(checkID2==1);
        
        % Microcategory P1
        checkMic1=NaN(1,616);
        for t=1:616
            checkMic1(1,t)=NUMERIC(t,10)==info.Micro_category(info.ID_sequence==seqValues(t,1));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,3)=all(checkMic1==1);
        
         % Microcategory P2
        checkMic2=NaN(1,616);
        for t=1:616
            checkMic2(1,t)=NUMERIC(t,12)==info.Micro_category(info.ID_sequence==seqValues(t,2));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,4)=all(checkMic2==1);
        
        % Macrocategory P1
        checkMac1=NaN(1,616);
        for t=1:616
            checkMac1(1,t)=NUMERIC(t,11)==info.Macro_category(info.ID_sequence==seqValues(t,1));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,5)=all(checkMac1==1);
        
         % Macrocategory P2
        checkMac2=NaN(1,616);
        for t=1:616
            checkMac2(1,t)=NUMERIC(t,13)==info.Macro_category(info.ID_sequence==seqValues(t,2));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,6)=all(checkMac2==1);
        
        
        % ID_sequence P1
        checkSeq1=NaN(1,616);
        for t=1:616
            checkSeq1(1,t)=NUMERIC(t,14)==seqValues(t,1);
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,7)=all(checkSeq1==1);
        
        % ID_sequence P2
        checkSeq2=NaN(1,616);
        for t=1:616
            checkSeq2(1,t)=NUMERIC(t,15)==seqValues(t,2);
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,8)=all(checkSeq2==1);
        
        
        % Block number
        checkBlock=NaN(1,616);
        for t=1:616
            checkBlock(1,t)=NUMERIC(t,16)==seqValues(t,3);
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,9)=all(checkBlock==1);
        
        
        % Inverse Feedback
        checkFB=NaN(1,616);
        for t=1:616
            checkFB(1,t)=NUMERIC(t,17)==seqValues(t,4);
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,10)=all(checkFB==1);
        
        
        % Participant-Number
        checkP=NaN(1,616);
        for t=1:616
            checkP(1,t)=NUMERIC(t,18)==p;
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,11)=all(checkP==1);
    
end

RESULT=all(metaCheck(p,:)==1)
% Everything is Fine.


