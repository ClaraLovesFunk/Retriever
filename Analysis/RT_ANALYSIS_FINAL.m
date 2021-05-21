%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%                        ANALYSIS RT-DATA 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% CONTENT:
% 1.    Preparing and aggregating the data: 
%       1.1 loading data and clearing from underperforming participants,
%       1.2 trials with no response or extremely short RT or 
%           SD (symbolic distance) = 1, adding SD-column
%       1.3 aggregating across participants
%       1.4 aggregating across blocks
%       1.5 aggregating blocks in pairs
%       1.6 aggregating all data
%
% 2.    Analysing the data:
%       2.1 SDE overall
%       2.2 SDE per block
%       2.3 SDE-dynamic 
%       2.4 RT-DYNAMIC 
%
% 3.    Basic stats
%       5.1 Mean: General RT across blocks and participants
%       5.2 Mean: General RT per block and participants
%
% 4.    Plots



%%                        1. PREPARING THE DATA

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 1.1 LOADING DATA AND EXCLUDING UNDERPERFORMING PARTICIPANTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%INFO ABOUT THE MATRIX
% dimension 1: trials
% dimension 2: data i.e.
    % column 1: P1 (1-8)
    % column 2: P2 (1-8)
    % column 3: chosen (1 or 2; NaN or zero if no/invalid response)
    % column 4: feedback (0 incorrect, 1 correct, 3 no feedback )
    % column 5: item selected's value
    % column 6: reaction time for selection
    % column 7: Ground accuracy (0 incorrect, 1 correct, 2 no response )
    % column 8: participant ID
% dimension 3: blocks
% dimension 4: subjects

% SD was used as abbreviation for symbolic distance

clear all

% Loadind data
load('behav_result_mat');

% Out participant with low-accuracy
for ppp=1:size(behav_result_mat,4); %per participant
 for   bbb=1:size(behav_result_mat,3); %per block
     
        gen_acc_block(ppp,bbb)=sum(behav_result_mat(:,7,bbb,ppp)==1)/size(behav_result_mat(:,7,bbb,ppp),1);

end
end

% Exclusion criteria

poi=gen_acc_block(:,size(behav_result_mat,3))>0.6; %Participant of interest
behav_result_mat=behav_result_mat(:,:,:,poi);






%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  1.2 CLEAR DATA FROM MISSING RESPONSES, EXTREME RT; AND SD = 1
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% Lower trimming limit: exclude trials with RT < 100 ms
trimLow = 0.1

% create new matrix to fill in data
data=NaN(size(behav_result_mat,1),10,size(behav_result_mat,3),size(behav_result_mat,4));

% fill in data
response=0;

for ppp=1:size(behav_result_mat,4)
    response=0;
    for bbb=1:size(behav_result_mat,3)
        response=0;
        for trial=1:size(behav_result_mat,1) 
         if ~isnan(behav_result_mat(trial,6,bbb,ppp))& (behav_result_mat(trial,6,bbb,ppp))>trimLow & abs(behav_result_mat(trial,1,bbb,ppp)-behav_result_mat(trial,2,bbb,ppp))>1 % kick out NaN, RT<0.1 and symbolic distance (SD)=1
             
             response=response+1;
            
             data(response,1:8,bbb,ppp)=behav_result_mat(trial,1:8,bbb,ppp); % fill in remaining trials from original matrix
             data(response,9,bbb,ppp)=abs(behav_result_mat(trial,1,bbb,ppp)-behav_result_mat(trial,2,bbb,ppp)); % adding column SD (Symbolic Distance)
             data(response,10,bbb,ppp)=bbb; % adding block index
         end
        end
        
        
    end
end

                 


                    



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  1.3 AGGREGATE ACROSS PARTICIPANTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% create new matrix to fill in data
data_allp=NaN(size(behav_result_mat,1),10,size(behav_result_mat,3));

% fill in data
response=0;

for bbb=1:size(behav_result_mat,3)
    for ppp=1:size(behav_result_mat,4)
        for trial=1:size(behav_result_mat,1)
         if ~isnan(behav_result_mat(trial,6,bbb,ppp))& abs(behav_result_mat(trial,1,bbb,ppp)-behav_result_mat(trial,2,bbb,ppp))>1 % kick out NaN and symbolic distance (SD)=1
             
             response=response+1;
            
             data_allp(response,1:8,bbb)=behav_result_mat(trial,1:8,bbb,ppp);
             data_allp(response,9,bbb)=abs(behav_result_mat(trial,1,bbb,ppp)-behav_result_mat(trial,2,bbb,ppp)); % adding column SD
             data_allp(response,10,bbb)=bbb; % adding block index
         end
        end
        
    end
    response=0;
end



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  1.4 AGGREGATE ACROSS BLOCKS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% create new matrix to fill in data
data_allblocks=NaN(42,10,size(behav_result_mat,4)); %dim1=trials,dim2=data-columns, dim3=participants

% fill in data
response=0;

for ppp=1:size(behav_result_mat,4)  
    for bbb=1:size(behav_result_mat,3)
        for trial=1:42
             
             response=response+1;
            
             data_allblocks(response,:,ppp)=data(trial,:,bbb,ppp);
             
        end
        
    end
    response=0;
end



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  1.5 AGGREGATE IN PAIRED BLOCKS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% create new matrix to fill in data
data_pairedBlocks=NaN(42,10,4,size(behav_result_mat,4)); %dim1=trials,dim2=data-columns, dim3=participants

% fill in data
response=0;

pb=[1 2; 3 4; 5 6; 7 8];
for ppp=1:size(behav_result_mat,4) 
    for bbb=1:4
        for pair=1:2
            for trial=1:42

                 response=response+1;

                 data_pairedBlocks(response,:,bbb,ppp)=data(trial,:,pb(bbb,pair),ppp);

            end
        end
        response=0;
    end
end
    
  


%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  1.6 AGGREGATE ALL DATA
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% create new matrix to fill in data
data_all=NaN(42,10); %dim1=trials,dim2=data-columns, dim3=participants

% fill in data
response=0;

for ppp=1:size(behav_result_mat,4) 
    for bbb=1:size(behav_result_mat,3)
        for pair=1:2
            for trial=1:42

                 response=response+1;

                 data_all(response,:)=data(trial,:,bbb,ppp);

            end    
        end  
    end 
end









%%                             2. ANALYSIS

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  2.1 SDE OVERALL
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


SDE_p=NaN(size(behav_result_mat,4),2); %rows=participants, columns=beta,pvalue


for ppp=1:size(behav_result_mat,4)
      
    t=data_allblocks(:,9,ppp); % SymDist predicts
    y=data_allblocks(:,6,ppp); % RT 
    
    [b,dev,stats]= glmfit(t,y);
    SDE_p(ppp,1)=b(2); % beta
    SDE_p(ppp,2)= stats.p(2);% pvalue
    
end

SDE_p

% SIGNIFICANCE OF ALL OBSERVATIONS REGARDING SDE PER BLOCK IN PARTICIPANTS

[h_SDE, p_SDE, ci_SDE, stats_SDE] = ttest(SDE_p(:,1))
  



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.2  SDE PER PAIRED BLOCK ACROSS PARTICIPANTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

SDE_pairedBlocks_p=NaN(4,2,1); %dim1 = paired blocks, dim2 = beta and pvalue dim3 = participant

for ppp=1:size(behav_result_mat,4) 
    for pb=1:4
       
    t=data_pairedBlocks(:,9,pb,ppp);
    y=data_pairedBlocks(:,6,pb,ppp);
    
    [b,dev,stats]= glmfit(t,y);
    SDE_pairedBlocks_p(pb,1,ppp)=b(2); % beta
    SDE_pairedBlocks_p(pb,2,ppp)= stats.p(2);% pvalue
    
    end
end

SDE_pairedBlocks_p

% SIGNIFICANCE 
% Bonferroni-Correction for multiple testing. Tests = 4 (4 paired blocks)
bonferroni=0.05/4

SDE_pairedBlocks_significance =NaN(4,4);

for pb=1:4
    [h_SDE_pairedBlocks, p_SDE_pairedBlocks, ci_SDE_pairedBlocks, stats_SDE_pairedBlocks] = ttest(SDE_pairedBlocks_p(pb,1,:));
    SDE_pairedBlocks_significance(pb,1)=p_SDE_pairedBlocks<bonferroni; % meeting bonferroni criterion
    SDE_pairedBlocks_significance(pb,2)=p_SDE_pairedBlocks; % pvalue
    SDE_pairedBlocks_significance(pb,3)=stats_SDE_pairedBlocks.tstat; %t-value
    SDE_pairedBlocks_significance(pb,4)=ci_SDE_pairedBlocks(1); % upper ci bound
    SDE_pairedBlocks_significance(pb,5)=ci_SDE_pairedBlocks(2); % lower ci bound
end

SDE_pairedBlocks_significance






%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  2.3 SDE PER BLOCKS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% SDE PER BLOCK PER PARTICIPANT

SD_block_p=NaN(size(behav_result_mat,3),3,1);

for bbb=1:size(behav_result_mat,3)
    for ppp=1:size(behav_result_mat,4)
        
    SD_block_p(bbb,1,ppp)=bbb; % block
    
    t=data(:,9,bbb,ppp); % SymDist predicts
    y=data(:,6,bbb,ppp); % RT 
    
    [b,dev,stats]= glmfit(t,y);
    SD_block_p(bbb,2,ppp)=b(2); % beta
    SD_block_p(bbb,3,ppp)= stats.p(2);% pvalue
    
    end
end

SD_block_p

% SIGNIFICANCE OF ALL OBSERVATIONS REGARDING SDE PER BLOCK IN PARTICIPANTS
% Bonferroni-Correction
bonferroni=0.05/size(behav_result_mat,3)
SD_block_significance =NaN(4,3);


for bbb=1:size(behav_result_mat,3)
    [h_SDE_block, p_SDE_block, ci_SDE_block, stats_SDE_block] = ttest(SD_block_p(bbb,2,:));
    SD_block_significance(bbb,1)=p_SDE_block<bonferroni; % significance
    SD_block_significance(bbb,2)=p_SDE_block; % pvalue
    SD_block_significance(bbb,3)=stats_SDE_block.tstat; %tstat
end

SD_block_significance
% when checking for a significant SDE in single blocks only the last 2
% blocks show it.


%%
% SDE PER BLOCK ACROSS PARTICIPANTS (FOR PLOTTING)

SD_block=NaN(size(behav_result_mat,3),3)

for bbb=1:size(behav_result_mat,3)
    
    SD_block(bbb,1)=bbb; % block
    
    t=data_allp(:,9,bbb);
    y=data_allp(:,6,bbb);
    
    [b,dev,stats]= glmfit(t,y);
    SD_block(bbb,2)=b(2); % beta
    SD_block(bbb,3)= stats.p(2);% pvalue
   
end

SD_block



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  2.4 SDE-DYNAMIC
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% SDE-DYNAMIC PER PARTICIPANT

SDE_dyn_p=NaN(size(behav_result_mat,4),2);

for ppp=1:size(behav_result_mat,4)
    SDE_dyn_p(ppp,1)=ppp; % participant
    
    mdl = fitglm(SD_block_p(:,1,ppp),SD_block_p(:,2,ppp)); % linear regression: does block-index (SD_block_p(:,1,ppp)) predict slope of SDE (SD_block_p(:,2,ppp))?
    SDE_dyn_p(ppp,2) = table2array(mdl.Coefficients(2,1)); %beta
end
SDE_dyn_p

% Significance

[h_SDE_dyn, p_SDE_dyn, ci_SDE_dyn, stats_SDE_dyn] = ttest(SDE_dyn_p(:,2))

% A: the SDE-Dynamic is significant.




%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  2.5 RT-DYNAMIC 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.3.1   RT-Dynamic over blocks per participant

rt_dyn_p=NaN(size(behav_result_mat,4),2);

for ppp=1:size(behav_result_mat,4)
    
    rt_dyn_p(ppp,1)=ppp; % participant
    
    mdl = fitglm(data_allblocks(:,10,ppp),data_allblocks(:,6,ppp)); % linear regression: does block-index predict RT)?
    rt_dyn_p(ppp,2) = table2array(mdl.Coefficients(2,1)); %beta
    
end
rt_dyn_p


% SIGNIFICANCE
[h_rt_dyn, p_rt_dyn, ci_rt_dyn, stats_rt_dyn] = ttest(rt_dyn_p(:,2))



%%



%                             4 BASIC STATS                             
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
   
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% MEAN OVERALL
mean_rt_overall=nanmean(data_all(:,6))

% MEAN PER BLOCK
mean_rt_block=NaN(size(behav_result_mat,3),2);
mean_rt_block(:,1)=1:size(behav_result_mat,3);

for bbb=1:size(behav_result_mat,3)
    mean_rt_block(bbb,2)=nanmean(nanmean(data(:,6,bbb,:)));
end
mean_rt_block

%% STD
% OVERALL
std_rt_overall=nanstd(data_all(:,6))

% PER BLOCK
std_rt_block=NaN(size(behav_result_mat,3),2);
std_rt_block(:,1)=1:size(behav_result_mat,3);

for bbb=1:size(behav_result_mat,3)
    std_rt_block(bbb,2)=mean(nanstd(data(:,6,bbb,:)));
end

std_rt_block


%%                            4 PLOTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%        
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% SDE-DYNAMIC

figure
plot(SD_block(:,1),SD_block(:,2));
title('SDE in RT over time')
xlabel('blocks') 
ylabel('SDE in RT across particpants') 

% RT-DYNAMIC
figure
plot (mean_rt_block(:,1),mean_rt_block(:,2))

title('RT over time')
xlabel('blocks') 
ylabel('RT across particpants') 