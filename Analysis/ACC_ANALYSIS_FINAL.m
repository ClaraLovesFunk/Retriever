%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%                        ANALYSIS ACCURACY-DATA 

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
















%%                          2. ANALYSIS 

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.1 SDE OVERALL
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

SDE_p=NaN(size(behav_result_mat,4),2); %rows=participants, columns=beta,pvalue

for ppp=1:size(behav_result_mat,4)  
        
    t=data_allblocks(:,9,ppp); % SymDist predicts
    y=data_allblocks(:,7,ppp); % Accuracy 
    
    [b,dev,stats]= glmfit(t,y,'binomial');
    SDE_p(ppp,1)=b(2); % beta
    SDE_p(ppp,2)= stats.p(2);% pvalue
    
end

SDE_p

% SIGNIFICANCE 

[h_SDE, p_SDE, ci_SDE, stats_SDE] = ttest(SDE_p(:,1))

% Overall there is a significant SDE.
  



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.2  SDE PER PAIRED BLOCKS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

SDE_pairedBlocks_p=NaN(4,2,1);

for pb=1:4
    for ppp=1:size(behav_result_mat,4)  
       
    t=data_pairedBlocks(:,9,pb,ppp);
    y=data_pairedBlocks(:,7,pb,ppp);
    
    [b,dev,stats]= glmfit(t,y,'binomial');
    SDE_pairedBlocks_p(pb,1,ppp)=b(2); % beta
    SDE_pairedBlocks_p(pb,2,ppp)= stats.p(2);% pvalue
    
    end
end

SDE_pairedBlocks_p
% SIGNIFICANCE 
% Bonferroni-Correction for multiple testing. Tests = 4 (4 paired blocks)
bonferroni=0.05/4

SDE_pairedBlocks_significance =NaN(4,3);

for pb=1:4
    [h_SDE_pairedBlocks, p_SDE_pairedBlocks, ci_SDE_pairedBlocks, stats_SDE_pairedBlocks] = ttest(SDE_pairedBlocks_p(pb,2,:));
    SDE_pairedBlocks_significance(pb,1)=p_SDE_pairedBlocks<bonferroni;
    SDE_pairedBlocks_significance(pb,2)=p_SDE_pairedBlocks;
    SDE_pairedBlocks_significance(pb,3)=stats_SDE_pairedBlocks.tstat;
end

SDE_pairedBlocks_significance




%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.3  SDE IN SINGLE BLOCKS 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


SDE_block_p=NaN(8,3,1);

for bbb=1:8
    for ppp=1:size(behav_result_mat,4)  
       
    t=data(:,9,bbb,ppp);
    y=data(:,7,bbb,ppp);
    
    [b,dev,stats]= glmfit(t,y,'binomial');
    SDE_block_p(bbb,1,ppp)=bbb;
    SDE_block_p(bbb,2,ppp)=b(2); % beta
    SDE_block_p(bbb,3,ppp)= stats.p(2);% pvalue
    
    end
end

SDE_block_p


% SIGNIFICANCE 
% Bonferroni-Correction for multiple testing. Tests = 4 (4 paired blocks)
bonferroni=0.05/8

SDE_blocks_significance =NaN(8,4);

for bbb=1:8
    [h_SDE_blocks, p_SDE_blocks, ci_SDE_blocks, stats_SDE_blocks] = ttest(SDE_block_p(bbb,2,:));
    SDE_blocks_significance(bbb,1)=bbb;
    SDE_blocks_significance(bbb,2)=p_SDE_blocks<bonferroni;
    SDE_blocks_significance(bbb,3)=p_SDE_blocks;
    SDE_blocks_significance(bbb,4)=stats_SDE_blocks.tstat;
end

SDE_blocks_significance





%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% 2.3  SDE IN SINGLE BLOCKS FOR PLOTTING ACROSS PARTICIPANTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


SDE_block=NaN(8,3);

for bbb=1:8
    for ppp=1:size(behav_result_mat,4)  
    SDE_block(bbb,1)=bbb;
       
    t=data_allp(:,9,bbb);
    y=data_allp(:,7,bbb);
    
    [b,dev,stats]= glmfit(t,y,'binomial');
    SDE_block(bbb,2)=b(2); % beta
    SDE_block(bbb,3)=stats.se(2);
    
    
    end
end

SDE_block




%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%   SDE-DYNAMIC 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


SDE_dyn_p=NaN(1,1);

for bbb=1:8
    for ppp=1:size(behav_result_mat,4)  
       
    t=SDE_block_p(:,1,ppp); % does block number predict
    y=SDE_block_p(:,2,ppp); % strength of SDE (betas per block)
    
    [b,dev,stats]= glmfit(t,y);
    SDE_dyn_p(1,ppp)=b(2); % beta

    
    end
end

SDE_dyn_p


% SIGNIFICANCE 
% Bonferroni-Correction for multiple testing. Tests = 4 (4 paired blocks)


[h_SDE_dyn, p_SDE_dyn, ci_SDE_dyn, stats_SDE_dyn] = ttest(SDE_dyn_p(:))






%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%  2.4 ACCURACY-DYNAMIC 
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

acc_dyn_p=NaN(size(behav_result_mat,4),1);

for ppp=1:size(behav_result_mat,4)  
    
    
    t=data_allblocks(:,10,ppp); % block number
    y=data_allblocks(:,7,ppp); % accuracy
    [b,dev,stats] = glmfit(t,y,'binomial'); % linear regression: does block-index predict RT
    acc_dyn_p(ppp) = stats.beta(2); %beta
    
end
acc_dyn_p

%
% 2.3.2   t-test for significance
[h_acc_dyn p_acc_dyn ci_acc_dyn stat_acc_dyn] = ttest(acc_dyn_p)

% Accuracy is significantly lowering accross blocks. tstat:
% [h_acc_dyn p_acc_dyn ci_acc_dyn stat_acc_dyn].


















%%                            BASIC STATS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%   
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


% MEAN AND STD OVERALL (EXCLUDING NEIGHBOURS)
mean_accuracy_p=NaN(size(behav_result_mat,4),1);
for ppp=1:size(behav_result_mat,4)
    mean_accuracy_p(ppp)=nanmean(data_allblocks(:,7,ppp));
end
mean_accuracy=mean(mean_accuracy_p(1:size(behav_result_mat,4)))
std_accuracy=nanstd(mean_accuracy_p(1:size(behav_result_mat,4)))
%%
% MEAN AND STD BLOCK (EXCLUDING NEIGHBOURS)
mean_accuracy_block_p=NaN(8,size(behav_result_mat,4)  );
for ppp=1:size(behav_result_mat,4)  
    for bbb=1:8
        mean_accuracy_block_p(bbb,ppp)=nanmean(data(:,7,bbb,ppp));
    end
end
mean_accuracy_block_p;

mean_accuracy_block=NaN(8,2);
mean_accuracy_block(:,1)=1:8;

mean_std_block=NaN(8,2);
mean_std_block(:,1)=1:8;

for bbb=1:8
    mean_accuracy_block(bbb,2)=mean(mean_accuracy_block_p(bbb,:));
    mean_std_block(bbb,2)=std(mean_accuracy_block_p(bbb,:));
end
mean_accuracy_block % mean across participants per block
mean_std_block %std between participants increases







%%                            4 PLOTS
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%        
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

% regression plot (missing!!!!!!!!)

% SDE-DYNAMIC

figure
plot(SDE_block(:,1),SDE_block(:,2));
title('SDE in Accuracy over time')
xlabel('blocks') 
ylabel('SDE in Accuracy across particpants') 

%% ACCURACY-DYNAMIC

% mean2plot=mean(mean_block_accuracy_p,2)
% std2plot=std(mean_block_accuracy_p,1,2)
% 
% figure
% plot(mean2plot)
% errorbar(1:8,mean2plot,std2plot);
%%
figure
plot (mean_accuracy_block(:,1),mean_accuracy_block(:,2))
title('Accuracy over time')
xlabel('blocks') 
ylabel('Accuracy across particpants') 










%% STUFF

% %% 2.1.2: SDE-DYNAMIC ACROSS PARTICIPANTS
% 
%     
% mdl = fitglm(SD_block(:,1),SD_block(:,2)); % linear regression: does block-index (SDE_block_p(:,1,ppp)) predict slope of SDE (SDE_block_p(:,2,ppp))?
% SDE_dyn = table2array(mdl.Coefficients(2,1)); %beta
% 
% SDE_dyn

%% ACCURACY-DYNAMIC

% mean2plot=mean(mean_block_accuracy_p,2)
% std2plot=std(mean_block_accuracy_p,1,2)
% 
% figure
% plot(mean2plot)
% errorbar(1:8,mean2plot,std2plot);

%% SDE-Dynamic - Nice Plot



%% %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
% RT-SDE PER BLOCK ACROSS PARTICIPANTS (FOR PLOTTING)
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

RT_SD_block=NaN(size(behav_result_mat,3),3)

for bbb=1:size(behav_result_mat,3)
    
    RT_SD_block(bbb,1)=bbb; % block
    
    t=data_allp(:,9,bbb);
    y=data_allp(:,6,bbb);
    
    [b,dev,stats]= glmfit(t,y);
    RT_SD_block(bbb,2)=b(2); % beta
    RT_SD_block(bbb,3)= stats.se(2);% pvalue
   
end

RT_SD_block


%% 

figure; 

subplot(1,2,1)



all_b=squeeze(SDE_block(:,2))'

mean_red=squeeze(SDE_block(:,2))';
sem_red=squeeze(SDE_block(:,3))';


% [r c]=find(mean_red==mean_mat);% to find the label for the pair

colores=(colormap(flip(cool(8))));
timetoplot=1:8;
a=plot(mean_red,'Color',colores(1,:),'LineWidth',2);hold on;

ylim([0.00 0.4])
xlim([1 8])

hold on;
fill([timetoplot,flipdim(timetoplot,2),timetoplot(1)],[mean_red'+sem_red';flipdim(mean_red'-sem_red',1);mean_red(1)+sem_red(1)],colores(1,:),'LineStyle','none','FaceAlpha',0.15);

title('SDE in Accuracy over Blocks')
xlabel('Block Number')
ylabel('Accuracy')

subplot(1,2,2)

mean_red=RT_SD_block(:,2)';
sem_red=RT_SD_block(:,3)';

% [r c]=find(mean_red==mean_mat);% to find the label for the pair

colores=(colormap(flip(cool(8))));
timetoplot=1:8;
a=plot(mean_red,'Color',colores(5,:),'LineWidth',2);hold on;

ylim([-0.05 0.05])
xlim([1 8])

hold on;
fill([timetoplot,flipdim(timetoplot,2),timetoplot(1)],[mean_red'+sem_red';flipdim(mean_red'-sem_red',1);mean_red(1)+sem_red(1)],colores(5,:),'LineStyle','none','FaceAlpha',0.15);

title('SDE in RT over Blocks')
xlabel('Block Number')
ylabel('RT (sec)')















