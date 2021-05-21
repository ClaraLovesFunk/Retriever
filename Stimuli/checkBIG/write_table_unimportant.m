load('m_sequence_decision_bs_Real (2)1.mat')
sequence =array2table(sequence_of_pairs);
writetable(sequence,'sequence.xlsx');

load('stimuli_info_bs_Real1.mat')
info =struct2table(stimuli_info);
writetable(info,'info.xlsx');