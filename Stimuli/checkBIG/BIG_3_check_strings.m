%% STRING CHECKS
% Since we're now checking strings as well, we need to take into account
% that the first row is researved for column headers and actual sequence
% info starts in row 2. 

metaCheck=NaN(1,4);

% load participant independent path dictionaries
dictA=readtable('pathDictionaryA.xlsx');
dictA=table2cell(dictA);
dictB=readtable('pathDictionaryB.xlsx');
dictB=table2cell(dictB);

for p=1
    % load participant-dependend BIG/'conditions_main'
    participant=num2str(p);
    BIG_p=['conditions_main_' participant '.xlsx'];
    seqValues=['seqValues' participant];
    [NUMERIC,TXT,RAW]=xlsread(BIG_p);
    
    % load partipant-dependend sequence and stimuli_info
    % loading sequence
    seqName=['m_sequence_decision_' participant '.mat'];
    load(seqName);
    seqValues=sequence_of_pairs;
    % load stimuli Info
    stimInfoName=['stimuli_info_' participant '.mat'];
    load(stimInfoName);
    info=stimuli_info;
    
        % paths P1
        checkPaths=NaN(1,616);
        for t=1:616
            if info.folder(info.ID_sequence==seqValues(t,1))=='A'
                compare=char(TXT(t+1,6))==char(dictA(info.Item_ID(info.ID_sequence==seqValues(t,1)),2));
                checkPaths(1,t)=all(compare==1);
            else
                compare=char(TXT(t+1,6))==char(dictB(info.Item_ID(info.ID_sequence==seqValues(t,1)),2));
                checkPaths(1,t)=all(compare==1);
            end
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,1)=all(checkPaths==1);
        
        % paths P2
        checkPaths2=NaN(1,616);
        for t=1:616
            if info.folder(info.ID_sequence==seqValues(t,2))=='A'
                compare=char(TXT(t+1,7))==char(dictA(info.Item_ID(info.ID_sequence==seqValues(t,2)),2));
                checkPaths2(1,t)=all(compare==1);
            else
                compare=char(TXT(t+1,7))==char(dictB(info.Item_ID(info.ID_sequence==seqValues(t,2)),2));
                checkPaths2(1,t)=all(compare==1);
            end
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,2)=all(checkPaths2==1);
        
        % Object names P1
        checkNames=NaN(1,616);
        for t=1:616
            a=char(TXT(t+1,4));
            checkNames(1,t)=all(a(1:12)==info.Item_Name(info.ID_sequence==seqValues(t,1),1:12));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,3)=all(checkNames==1);  
        
        % Object names P1
        checkNames2=NaN(1,616);
        for t=1:616
            a=char(TXT(t+1,5));
            checkNames2(1,t)=all(a(1:12)==info.Item_Name(info.ID_sequence==seqValues(t,2),1:12));
        end
        % Metacheck: 1= all object names in P1 are correct.
        metaCheck(p,4)=all(checkNames2==1); 
    
end

RESULTS=all(metaCheck==1)
% Everything is fine.
