/********************* 
 * Retriever_Ti Test *
 *********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([1.0, 1.0, 1.0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'retriever_ti';  // from the Builder filename that created this script
let expInfo = {'participant': ''};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
const instructionsLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(instructionsLoopLoopBegin, instructionsLoopLoopScheduler);
flowScheduler.add(instructionsLoopLoopScheduler);
flowScheduler.add(instructionsLoopLoopEnd);
const repPracticeLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repPracticeLoopBegin, repPracticeLoopScheduler);
flowScheduler.add(repPracticeLoopScheduler);
flowScheduler.add(repPracticeLoopEnd);
flowScheduler.add(ContinueOrEndRoutineBegin());
flowScheduler.add(ContinueOrEndRoutineEachFrame());
flowScheduler.add(ContinueOrEndRoutineEnd());
const quitExpLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(quitExpLoopLoopBegin, quitExpLoopLoopScheduler);
flowScheduler.add(quitExpLoopLoopScheduler);
flowScheduler.add(quitExpLoopLoopEnd);
const repBlocksLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repBlocksLoopBegin, repBlocksLoopScheduler);
flowScheduler.add(repBlocksLoopScheduler);
flowScheduler.add(repBlocksLoopEnd);
const BonusLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(BonusLoopLoopBegin, BonusLoopLoopScheduler);
flowScheduler.add(BonusLoopLoopScheduler);
flowScheduler.add(BonusLoopLoopEnd);
flowScheduler.add(freeResponseRoutineBegin());
flowScheduler.add(freeResponseRoutineEachFrame());
flowScheduler.add(freeResponseRoutineEnd());
flowScheduler.add(finishExperimentRoutineBegin());
flowScheduler.add(finishExperimentRoutineEachFrame());
flowScheduler.add(finishExperimentRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://app.prolific.co/submissions/complete?cc=17CBD1FA', '');

  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instr1;
var keyNext;
var random;
var thisExp;
var win;
var event;
var img_no;
var current_img;
var practiceBlocksClock;
var practiceBlock;
var msgStartPractice;
var key_startPrac;
var practiceMessage;
var fixation_2Clock;
var fixcross;
var practiceClock;
var practiceP1;
var practiceP2;
var practiceKey;
var msgPractice;
var acc_practice;
var prac_trial;
var tprac;
var durationBlank;
var crossPractice;
var PracFeedb_2Clock;
var practiceFeedback;
var screenAfterFB;
var attentionCheckPracClock;
var key_respAC_prac;
var AC_acc;
var hits_in_attention;
var abortMsg;
var ac_stim_prac;
var Pos1_prac;
var Pos2_prac;
var Pos3_prac;
var Pos4_prac;
var taskAC_prac;
var disturbanceClock;
var disturbed;
var keyDisturbed;
var ContinueOrEndClock;
var blockRepetitions;
var numberQuits;
var messageChecks;
var key_endFail;
var quitExperimentClock;
var LoopControl_2Clock;
var thisBlock;
var numberACresults;
var msgBlockNumber;
var main_task_blocks;
var beginBlock;
var key_respStart;
var fixation_mainClock;
var fixcross_2;
var trialClock;
var imageP1;
var imageP2;
var key_resp;
var msg;
var ntrial;
var trialReal;
var acc_real;
var acc_feedback;
var hits_per_block;
var hits_per_block_real;
var bonus_accuracies;
var cross_objects;
var feedbackClock;
var Feedback;
var blankScreen2;
var attentionCheckClock;
var key_respAC;
var hits_in_attention2;
var ac_stim;
var Pos1;
var Pos2;
var Pos3;
var Pos4;
var shapeInstructions;
var ContinueOrEnd2Clock;
var numberQuits2;
var msgEndExperiment;
var textEndExperiment;
var pressToEndExp;
var quitExperiment2Clock;
var BlockFeedbackClock;
var msgBlock;
var feedbBlocks;
var keynextBlock;
var bonusClock;
var msgBonus;
var get_bonus;
var key_resp2;
var presentBonus;
var freeResponseClock;
var text;
var ask_for_feedb;
var finishExperimentClock;
var finalText;
var key_respEnd;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instr1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'instr1', units : 'norm', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  keyNext = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // alias for random func
  
  random = function (a) {
      return Math.random();
  }
  
  // also define randint
  
  function randint(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }
  
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  event=psychoJS.eventManager;
  
  // read in p=1 from the file - change later
  //var participantCount; 
  //participantCount = new TrialHandler({
  //    psychoJS: psychoJS,
  //    nReps: 1, method: TrialHandler.Method.RANDOM,
  //    extraInfo: expInfo, originPath: undefined,
  //    trialList: 'p_number_pilot.csv',
  //    seed: undefined, name: 'participantCount'
  //});
      
  //trialList = participantCount.getTrialList();    
  //p_number = trialList[0]['P_number'];
  
  //file_number = (Number.parseInt(p_number) + 1);
  
  // get width, height, browser id
  var sUsrAg;
  var nIdx;
  function getBrowserId () {
   var browsers = ["MSIE", "Firefox", "Safari", "Chrome", "Opera"];
   sUsrAg = window.navigator.userAgent,
   nIdx = browsers.length - 1;
   for (nIdx; nIdx > -1 && sUsrAg.indexOf(browsers [nIdx]) === -1; nIdx--);
   
    return browsers[nIdx];
  }
   
  expInfo['browser'] = getBrowserId();
  expInfo['xResolution'] = screen.width;
  expInfo['yResolution'] = screen.height;
  //W = screen.width;
  //H = screen.height;
  // Start from picture no 1 and choose a new one to present once the experiment starts
  img_no = 1;
  current_img = (("html/resources/instructions/Slide" + img_no.toString()) + ".jpg");
  
  // Initialize components for Routine "practiceBlocks"
  practiceBlocksClock = new util.Clock();
  // Counter for the practice blocks
  practiceBlock = 0;
  
  // Message to be updated before every practice block
  msgStartPractice = "message shown before a practice Block";
  
  
  
  
  key_startPrac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  practiceMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceMessage',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "fixation_2"
  fixation_2Clock = new util.Clock();
  fixcross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixcross', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  
  
  // Initialize components for Routine "practice"
  practiceClock = new util.Clock();
  practiceP1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practiceP1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 250), 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  practiceP2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'practiceP2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [250, 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  practiceKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  msgPractice = "Feedback msg after practice trial";
  acc_practice = [];
  prac_trial = 0;
  tprac = [];
  durationBlank = 0.0;
  crossPractice = new visual.ShapeStim ({
    win: psychoJS.window, name: 'crossPractice', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1), (- 1), (- 1)]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "PracFeedb_2"
  PracFeedb_2Clock = new util.Clock();
  practiceFeedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'practiceFeedback',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  screenAfterFB = new visual.TextStim({
    win: psychoJS.window,
    name: 'screenAfterFB',
    text: 'Any text\n\nincluding line breaks',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "attentionCheckPrac"
  attentionCheckPracClock = new util.Clock();
  key_respAC_prac = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AC_acc = [];
  hits_in_attention = 0;
  abortMsg = "";
  
  ac_stim_prac = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ac_stim_prac', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Pos1_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos1_prac',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Pos2_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos2_prac',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0.3, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Pos3_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos3_prac',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  Pos4_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos4_prac',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  taskAC_prac = new visual.TextStim({
    win: psychoJS.window,
    name: 'taskAC_prac',
    text: "Use arrows to choose the shape's name",
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "disturbance"
  disturbanceClock = new util.Clock();
  disturbed = new visual.TextStim({
    win: psychoJS.window,
    name: 'disturbed',
    text: "Were things around you quiet during the last block?\n\nPress '1' if you were disturbed and '0' if you were NOT disturbed.\n\nPlease do NOT use the NumPad.",
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  keyDisturbed = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "ContinueOrEnd"
  ContinueOrEndClock = new util.Clock();
  blockRepetitions = 0;
  numberQuits = 0;
  
  messageChecks = new visual.TextStim({
    win: psychoJS.window,
    name: 'messageChecks',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_endFail = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quitExperiment"
  quitExperimentClock = new util.Clock();
  // Initialize components for Routine "LoopControl_2"
  LoopControl_2Clock = new util.Clock();
  thisBlock = 0;
  numberACresults = 0;
  msgBlockNumber = "which block we say we starting";
  main_task_blocks = (("condition_files/conditions_main_" + expInfo["participant"].toString()) + ".xlsx");
  
  beginBlock = new visual.TextStim({
    win: psychoJS.window,
    name: 'beginBlock',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  key_respStart = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "fixation_main"
  fixation_mainClock = new util.Clock();
  fixcross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'fixcross_2', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1, depth: 0, interpolate: true,
  });
  
  //trialtimer = new util.Clock(); //define a beginning of exp timer
  
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  imageP1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageP1', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 250), 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  imageP2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'imageP2', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [250, 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  msg = "Feedback msg after trial";
  // Counter for the trials 
  ntrial = 0;
  trialReal = [];
  
  // Coding the feedback message - add to output file
  acc_real = [];
  acc_feedback = [];
  
  // Counter for hits per block for feedback and real accuracy
  hits_per_block = 0;
  hits_per_block_real = 0;
  bonus_accuracies = [];
  
  cross_objects = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_objects', units : 'pix', 
    vertices: 'cross', size:[20, 20],
    ori: 0, pos: [0, 0],
    lineWidth: 1, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  Feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'Feedback',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  blankScreen2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'blankScreen2',
    text: 'Any text\n\nincluding line breaks',
    font: 'Calibri',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "attentionCheck"
  attentionCheckClock = new util.Clock();
  key_respAC = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AC_acc = [];
  hits_in_attention2 = 0;
  
  ac_stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ac_stim', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [200, 200],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  Pos1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos1',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0.25], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -3.0 
  });
  
  Pos2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos2',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0.3, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -4.0 
  });
  
  Pos3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos3',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -5.0 
  });
  
  Pos4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Pos4',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [(- 0.3), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -6.0 
  });
  
  shapeInstructions = new visual.TextStim({
    win: psychoJS.window,
    name: 'shapeInstructions',
    text: "Use arrows to choose the shape's name",
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "ContinueOrEnd2"
  ContinueOrEnd2Clock = new util.Clock();
  numberQuits2 = 0;
  msgEndExperiment = "text after attention checks";
  
  textEndExperiment = new visual.TextStim({
    win: psychoJS.window,
    name: 'textEndExperiment',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  pressToEndExp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "quitExperiment2"
  quitExperiment2Clock = new util.Clock();
  // Initialize components for Routine "BlockFeedback"
  BlockFeedbackClock = new util.Clock();
  msgBlock = "fb after Block";
  
  feedbBlocks = new visual.TextStim({
    win: psychoJS.window,
    name: 'feedbBlocks',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -1.0 
  });
  
  keynextBlock = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "disturbance"
  disturbanceClock = new util.Clock();
  disturbed = new visual.TextStim({
    win: psychoJS.window,
    name: 'disturbed',
    text: "Were things around you quiet during the last block?\n\nPress '1' if you were disturbed and '0' if you were NOT disturbed.\n\nPlease do NOT use the NumPad.",
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  keyDisturbed = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "bonus"
  bonusClock = new util.Clock();
  msgBonus = "Feedback msg to say if participant gets bonus";
  get_bonus = [];
  
  key_resp2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  presentBonus = new visual.TextStim({
    win: psychoJS.window,
    name: 'presentBonus',
    text: 'default text',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "freeResponse"
  freeResponseClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  ask_for_feedb = new visual.TextStim({
    win: psychoJS.window,
    name: 'ask_for_feedb',
    text: 'Here you can give us feedback. [When ready, press Enter to go to our last message]\n',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "finishExperiment"
  finishExperimentClock = new util.Clock();
  finalText = new visual.TextStim({
    win: psychoJS.window,
    name: 'finalText',
    text: 'Great! You finished the second task. Thank you! \nPress space to exit and please wait until you get redirected back to Prolific. ',
    font: 'Sans Serif',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('black'),  opacity: 1,
    depth: 0.0 
  });
  
  key_respEnd = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var instructionsLoop;
var currentLoop;
function instructionsLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  instructionsLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 100, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'instructionsLoop'
  });
  psychoJS.experiment.addLoop(instructionsLoop); // add the loop to the experiment
  currentLoop = instructionsLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisInstructionsLoop of instructionsLoop) {
    const snapshot = instructionsLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instructionsRoutineBegin(snapshot));
    thisScheduler.add(instructionsRoutineEachFrame(snapshot));
    thisScheduler.add(instructionsRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function instructionsLoopLoopEnd() {
  psychoJS.experiment.removeLoop(instructionsLoop);

  return Scheduler.Event.NEXT;
}


var repPractice;
function repPracticeLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  repPractice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 2, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repPractice'
  });
  psychoJS.experiment.addLoop(repPractice); // add the loop to the experiment
  currentLoop = repPractice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepPractice of repPractice) {
    const snapshot = repPractice.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(practiceBlocksRoutineBegin(snapshot));
    thisScheduler.add(practiceBlocksRoutineEachFrame(snapshot));
    thisScheduler.add(practiceBlocksRoutineEnd(snapshot));
    const practiceTrialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(practiceTrialsLoopBegin, practiceTrialsLoopScheduler);
    thisScheduler.add(practiceTrialsLoopScheduler);
    thisScheduler.add(practiceTrialsLoopEnd);
    const AttentionsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(AttentionsLoopBegin, AttentionsLoopScheduler);
    thisScheduler.add(AttentionsLoopScheduler);
    thisScheduler.add(AttentionsLoopEnd);
    thisScheduler.add(disturbanceRoutineBegin(snapshot));
    thisScheduler.add(disturbanceRoutineEachFrame(snapshot));
    thisScheduler.add(disturbanceRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practiceTrials;
function practiceTrialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  practiceTrials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'conditions_practice.xlsx', myIndices),
    seed: undefined, name: 'practiceTrials'
  });
  psychoJS.experiment.addLoop(practiceTrials); // add the loop to the experiment
  currentLoop = practiceTrials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPracticeTrial of practiceTrials) {
    const snapshot = practiceTrials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(fixation_2RoutineBegin(snapshot));
    thisScheduler.add(fixation_2RoutineEachFrame(snapshot));
    thisScheduler.add(fixation_2RoutineEnd(snapshot));
    thisScheduler.add(practiceRoutineBegin(snapshot));
    thisScheduler.add(practiceRoutineEachFrame(snapshot));
    thisScheduler.add(practiceRoutineEnd(snapshot));
    thisScheduler.add(PracFeedb_2RoutineBegin(snapshot));
    thisScheduler.add(PracFeedb_2RoutineEachFrame(snapshot));
    thisScheduler.add(PracFeedb_2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practiceTrialsLoopEnd() {
  psychoJS.experiment.removeLoop(practiceTrials);

  return Scheduler.Event.NEXT;
}


var Attentions;
function AttentionsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  Attentions = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, 'attentionChecks.xlsx', '0:4'),
    seed: undefined, name: 'Attentions'
  });
  psychoJS.experiment.addLoop(Attentions); // add the loop to the experiment
  currentLoop = Attentions;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisAttention of Attentions) {
    const snapshot = Attentions.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(attentionCheckPracRoutineBegin(snapshot));
    thisScheduler.add(attentionCheckPracRoutineEachFrame(snapshot));
    thisScheduler.add(attentionCheckPracRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function AttentionsLoopEnd() {
  psychoJS.experiment.removeLoop(Attentions);

  return Scheduler.Event.NEXT;
}


function repPracticeLoopEnd() {
  psychoJS.experiment.removeLoop(repPractice);

  return Scheduler.Event.NEXT;
}


var quitExpLoop;
function quitExpLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  quitExpLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numberQuits, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'quitExpLoop'
  });
  psychoJS.experiment.addLoop(quitExpLoop); // add the loop to the experiment
  currentLoop = quitExpLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQuitExpLoop of quitExpLoop) {
    const snapshot = quitExpLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(quitExperimentRoutineBegin(snapshot));
    thisScheduler.add(quitExperimentRoutineEachFrame(snapshot));
    thisScheduler.add(quitExperimentRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function quitExpLoopLoopEnd() {
  psychoJS.experiment.removeLoop(quitExpLoop);

  return Scheduler.Event.NEXT;
}


var repBlocks;
function repBlocksLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  repBlocks = new TrialHandler({
    psychoJS: psychoJS,
    nReps: blockRepetitions, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repBlocks'
  });
  psychoJS.experiment.addLoop(repBlocks); // add the loop to the experiment
  currentLoop = repBlocks;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepBlock of repBlocks) {
    const snapshot = repBlocks.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(LoopControl_2RoutineBegin(snapshot));
    thisScheduler.add(LoopControl_2RoutineEachFrame(snapshot));
    thisScheduler.add(LoopControl_2RoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    const trials_ACLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trials_ACLoopBegin, trials_ACLoopScheduler);
    thisScheduler.add(trials_ACLoopScheduler);
    thisScheduler.add(trials_ACLoopEnd);
    const presentACresultsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(presentACresultsLoopBegin, presentACresultsLoopScheduler);
    thisScheduler.add(presentACresultsLoopScheduler);
    thisScheduler.add(presentACresultsLoopEnd);
    const quitExpLoop2LoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(quitExpLoop2LoopBegin, quitExpLoop2LoopScheduler);
    thisScheduler.add(quitExpLoop2LoopScheduler);
    thisScheduler.add(quitExpLoop2LoopEnd);
    thisScheduler.add(BlockFeedbackRoutineBegin(snapshot));
    thisScheduler.add(BlockFeedbackRoutineEachFrame(snapshot));
    thisScheduler.add(BlockFeedbackRoutineEnd(snapshot));
    thisScheduler.add(disturbanceRoutineBegin(snapshot));
    thisScheduler.add(disturbanceRoutineEachFrame(snapshot));
    thisScheduler.add(disturbanceRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: TrialHandler.importConditions(psychoJS.serverManager, main_task_blocks, MyIndicesMain),
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(fixation_mainRoutineBegin(snapshot));
    thisScheduler.add(fixation_mainRoutineEachFrame(snapshot));
    thisScheduler.add(fixation_mainRoutineEnd(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(feedbackRoutineBegin(snapshot));
    thisScheduler.add(feedbackRoutineEachFrame(snapshot));
    thisScheduler.add(feedbackRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_AC;
function trials_ACLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_AC = new TrialHandler({
    psychoJS: psychoJS,
    nReps: repsAC, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'attentionChecks.xlsx',
    seed: undefined, name: 'trials_AC'
  });
  psychoJS.experiment.addLoop(trials_AC); // add the loop to the experiment
  currentLoop = trials_AC;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrials_AC of trials_AC) {
    const snapshot = trials_AC.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(attentionCheckRoutineBegin(snapshot));
    thisScheduler.add(attentionCheckRoutineEachFrame(snapshot));
    thisScheduler.add(attentionCheckRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_ACLoopEnd() {
  psychoJS.experiment.removeLoop(trials_AC);

  return Scheduler.Event.NEXT;
}


var presentACresults;
function presentACresultsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  presentACresults = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numberACresults, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'presentACresults'
  });
  psychoJS.experiment.addLoop(presentACresults); // add the loop to the experiment
  currentLoop = presentACresults;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPresentACresult of presentACresults) {
    const snapshot = presentACresults.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(ContinueOrEnd2RoutineBegin(snapshot));
    thisScheduler.add(ContinueOrEnd2RoutineEachFrame(snapshot));
    thisScheduler.add(ContinueOrEnd2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function presentACresultsLoopEnd() {
  psychoJS.experiment.removeLoop(presentACresults);

  return Scheduler.Event.NEXT;
}


var quitExpLoop2;
function quitExpLoop2LoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  quitExpLoop2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: numberQuits2, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'quitExpLoop2'
  });
  psychoJS.experiment.addLoop(quitExpLoop2); // add the loop to the experiment
  currentLoop = quitExpLoop2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisQuitExpLoop2 of quitExpLoop2) {
    const snapshot = quitExpLoop2.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(quitExperiment2RoutineBegin(snapshot));
    thisScheduler.add(quitExperiment2RoutineEachFrame(snapshot));
    thisScheduler.add(quitExperiment2RoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function quitExpLoop2LoopEnd() {
  psychoJS.experiment.removeLoop(quitExpLoop2);

  return Scheduler.Event.NEXT;
}


function repBlocksLoopEnd() {
  psychoJS.experiment.removeLoop(repBlocks);

  return Scheduler.Event.NEXT;
}


var BonusLoop;
function BonusLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  BonusLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: repsBonus, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'BonusLoop'
  });
  psychoJS.experiment.addLoop(BonusLoop); // add the loop to the experiment
  currentLoop = BonusLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisBonusLoop of BonusLoop) {
    const snapshot = BonusLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(bonusRoutineBegin(snapshot));
    thisScheduler.add(bonusRoutineEachFrame(snapshot));
    thisScheduler.add(bonusRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function BonusLoopLoopEnd() {
  psychoJS.experiment.removeLoop(BonusLoop);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _keyNext_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instr1.setImage(current_img);
    keyNext.keys = undefined;
    keyNext.rt = undefined;
    _keyNext_allKeys = [];
    // Update picture in the beginning of the loop
    current_img = (("html/resources/instructions/Slide" + img_no.toString()) + ".jpg");
    
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instr1);
    instructionsComponents.push(keyNext);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instructionsRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instr1* updates
    if (t >= 0.0 && instr1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instr1.tStart = t;  // (not accounting for frame time here)
      instr1.frameNStart = frameN;  // exact frame index
      
      instr1.setAutoDraw(true);
    }

    
    // *keyNext* updates
    if (t >= 0.0 && keyNext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyNext.tStart = t;  // (not accounting for frame time here)
      keyNext.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyNext.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyNext.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyNext.clearEvents(); });
    }

    if (keyNext.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyNext.getKeys({keyList: ['left', 'right', 'space'], waitRelease: false});
      _keyNext_allKeys = _keyNext_allKeys.concat(theseKeys);
      if (_keyNext_allKeys.length > 0) {
        keyNext.keys = _keyNext_allKeys[_keyNext_allKeys.length - 1].name;  // just the last key pressed
        keyNext.rt = _keyNext_allKeys[_keyNext_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionsRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // if the participant pressed the left key, decrease the image
    // number by one (e. g. going from "image 2" to "image 1"),
    // and if they pressed the right key, increase the image number
    // by one ("image 2" -> "image 3")
    
    if (((img_no > 1) && ((keyNext.keys === "left".toString()) || (keyNext.keys === "left")))) {
        img_no -= 1;
    } else {
        if (((img_no < 16) && ((keyNext.keys === "right".toString()) || (keyNext.keys === "right")))) {
            img_no += 1;
        } else {
            if (((img_no === 16) && ((keyNext.keys === "space") || (keyNext.keys === "space".toString())))) {
                instructionsLoop.finished = true;
                trials.finished = true;
            }
        }
    }
    current_img = (("html/resources/instructions/Slide" + img_no.toString()) + ".jpg");
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var myIndices;
var _key_startPrac_allKeys;
var practiceBlocksComponents;
function practiceBlocksRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practiceBlocks'-------
    t = 0;
    practiceBlocksClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practiceBlock += 1;
    
    // For each block choose rows from the excel file that controls the loop 
    if ((practiceBlock === 1)) {
        myIndices = "0:8";
        msgStartPractice = "Let's start practicing this task.\nDon't worry about making mistakes, just try to understand the goal for this task.\n[Press space bar to continue]";
    } else {
        myIndices = "8:16";
        msgStartPractice = "This is the second practice block. \nAgain, relax and try to get familiar with the task and the timing, don't worry about mistakes.\n[Press space bar to start]";
    }
    
    key_startPrac.keys = undefined;
    key_startPrac.rt = undefined;
    _key_startPrac_allKeys = [];
    practiceMessage.setText(msgStartPractice);
    // keep track of which components have finished
    practiceBlocksComponents = [];
    practiceBlocksComponents.push(key_startPrac);
    practiceBlocksComponents.push(practiceMessage);
    
    for (const thisComponent of practiceBlocksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practiceBlocksRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practiceBlocks'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practiceBlocksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_startPrac* updates
    if (t >= 0.0 && key_startPrac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_startPrac.tStart = t;  // (not accounting for frame time here)
      key_startPrac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_startPrac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_startPrac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_startPrac.clearEvents(); });
    }

    if (key_startPrac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_startPrac.getKeys({keyList: ['space'], waitRelease: false});
      _key_startPrac_allKeys = _key_startPrac_allKeys.concat(theseKeys);
      if (_key_startPrac_allKeys.length > 0) {
        key_startPrac.keys = _key_startPrac_allKeys[_key_startPrac_allKeys.length - 1].name;  // just the last key pressed
        key_startPrac.rt = _key_startPrac_allKeys[_key_startPrac_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *practiceMessage* updates
    if (t >= 0.0 && practiceMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceMessage.tStart = t;  // (not accounting for frame time here)
      practiceMessage.frameNStart = frameN;  // exact frame index
      
      practiceMessage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceBlocksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practiceBlocksRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practiceBlocks'-------
    for (const thisComponent of practiceBlocksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "practiceBlocks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var fixTiming;
var jitter;
var routineStart;
var fixation_2Components;
function fixation_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation_2'-------
    t = 0;
    fixation_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Jitter the timing of the fix cross in practice 
    fixTiming = Math.random(0, 0.5);
    jitter = (0.5 + fixTiming);
    routineStart = globalClock.getTime();
    
    // keep track of which components have finished
    fixation_2Components = [];
    fixation_2Components.push(fixcross);
    
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function fixation_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixcross* updates
    if (frameN >= 0 && fixcross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixcross.tStart = t;  // (not accounting for frame time here)
      fixcross.frameNStart = frameN;  // exact frame index
      
      fixcross.setAutoDraw(true);
    }

    if (fixcross.status === PsychoJS.Status.STARTED && frameN >= (fixcross.frameNStart + jitter)) {
      fixcross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation_2'-------
    for (const thisComponent of fixation_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Store onset of the fix cross in practice to the output file
    psychoJS.experiment.addData('fix_onset', routineStart + fixcross.tStart);
    
    // the Routine "fixation_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _practiceKey_allKeys;
var routinePracStart;
var crossDisappear;
var practiceComponents;
function practiceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'practice'-------
    t = 0;
    practiceClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    practiceP1.setImage(LocItem1);
    practiceP2.setImage(LocItem2);
    practiceKey.keys = undefined;
    practiceKey.rt = undefined;
    _practiceKey_allKeys = [];
    prac_trial += 1;
    tprac = prac_trial;
    psychoJS.experiment.addData("tprac", tprac);
    routinePracStart = globalClock.getTime();
    // Choose opacity if the fix cross - to change after a key response
    crossDisappear = 1;
    
    // keep track of which components have finished
    practiceComponents = [];
    practiceComponents.push(practiceP1);
    practiceComponents.push(practiceP2);
    practiceComponents.push(practiceKey);
    practiceComponents.push(crossPractice);
    
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function practiceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practiceP1* updates
    if (t >= 0.0 && practiceP1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceP1.tStart = t;  // (not accounting for frame time here)
      practiceP1.frameNStart = frameN;  // exact frame index
      
      practiceP1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceP1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceP1.setAutoDraw(false);
    }
    
    // *practiceP2* updates
    if (t >= 0.0 && practiceP2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceP2.tStart = t;  // (not accounting for frame time here)
      practiceP2.frameNStart = frameN;  // exact frame index
      
      practiceP2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceP2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceP2.setAutoDraw(false);
    }
    
    // *practiceKey* updates
    if (t >= 0.0 && practiceKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceKey.tStart = t;  // (not accounting for frame time here)
      practiceKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { practiceKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { practiceKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { practiceKey.clearEvents(); });
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceKey.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceKey.status = PsychoJS.Status.FINISHED;
  }

    if (practiceKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = practiceKey.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _practiceKey_allKeys = _practiceKey_allKeys.concat(theseKeys);
      if (_practiceKey_allKeys.length > 0) {
        practiceKey.keys = _practiceKey_allKeys[0].name;  // just the first key pressed
        practiceKey.rt = _practiceKey_allKeys[0].rt;
      }
    }
    
    // Make fix cross transparent when a key is pressed 
    if ((practiceKey.keys !== undefined)) {
        crossDisappear = 0;
    }
    
    
    // *crossPractice* updates
    if (t >= 0.0 && crossPractice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      crossPractice.tStart = t;  // (not accounting for frame time here)
      crossPractice.frameNStart = frameN;  // exact frame index
      
      crossPractice.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (crossPractice.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      crossPractice.setAutoDraw(false);
    }
    
    if (crossPractice.status === PsychoJS.Status.STARTED){ // only update if being drawn
      crossPractice.setOpacity(crossDisappear);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var valueDiff;
var value_dist;
var value_dist_abs;
function practiceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'practice'-------
    for (const thisComponent of practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('practiceKey.keys', practiceKey.keys);
    if (typeof practiceKey.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('practiceKey.rt', practiceKey.rt);
        }
    
    practiceKey.stop();
    // Catching response and calculating value; > 0 means correct
    if ((practiceKey.keys === "left")) {
        valueDiff = (P1 - P2);
        psychoJS.experiment.addData("pracitem_chosen_name", NameItem1);
    }
    if ((practiceKey.keys === "right")) {
        valueDiff = (P2 - P1);
        psychoJS.experiment.addData("pracitem_chosen_name", NameItem2);
    }
    if ((practiceKey.keys === undefined)) {
        valueDiff = null;
        psychoJS.experiment.addData("practiceKey.keys", NaN);
        psychoJS.experiment.addData("practiceKey.rt", NaN);
        psychoJS.experiment.addData("pracitem_chosen_name", "No_response");
    }
    // Calculating if items are neighbors or not 
    value_dist = (P1 - P2);
    value_dist_abs = Math.abs(value_dist);
    
    // Loop for giving accurate feedback after every trial
    if ((practiceKey.keys === undefined)) {
        msgPractice = "TRY TO RESPOND FASTER";
    } else {
        if (((valueDiff > 0) && (value_dist_abs === 1))) {
            msgPractice = "WIN!";
            durationBlank = 0.5;
        } else {
            if (((valueDiff < 0) && (value_dist_abs === 1))) {
                msgPractice = "LOSS!";
                durationBlank = 0.5;
            } else {
                if ((value_dist_abs > 1)) {
                    msgPractice = "";
                    durationBlank = 0.0;
                }
            }
        }
    }
    
    // Loop for saving the real feedback and hits
    if ((valueDiff === null)) {
        acc_practice = 2;
    } else {
        if ((valueDiff > 0)) {
            acc_practice = 1;
        } else {
            if ((valueDiff < 0)) {
                acc_practice = 0;
            }
        }
    }
    psychoJS.experiment.addData("acc_practice", acc_practice);
    psychoJS.experiment.addData('P1_onsetPrac', routinePracStart + practiceP1.tStart);
    psychoJS.experiment.addData('P2_onsetPrac', routinePracStart + practiceP2.tStart);
    
    return Scheduler.Event.NEXT;
  };
}


var startFeedb;
var PracFeedb_2Components;
function PracFeedb_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'PracFeedb_2'-------
    t = 0;
    PracFeedb_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    practiceFeedback.setText(msgPractice);
    startFeedb = globalClock.getTime();
    // keep track of which components have finished
    PracFeedb_2Components = [];
    PracFeedb_2Components.push(practiceFeedback);
    PracFeedb_2Components.push(screenAfterFB);
    
    for (const thisComponent of PracFeedb_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function PracFeedb_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'PracFeedb_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = PracFeedb_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *practiceFeedback* updates
    if (t >= 0.0 && practiceFeedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      practiceFeedback.tStart = t;  // (not accounting for frame time here)
      practiceFeedback.frameNStart = frameN;  // exact frame index
      
      practiceFeedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (practiceFeedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      practiceFeedback.setAutoDraw(false);
    }
    
    // *screenAfterFB* updates
    if (t >= 0.5 && screenAfterFB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      screenAfterFB.tStart = t;  // (not accounting for frame time here)
      screenAfterFB.frameNStart = frameN;  // exact frame index
      
      screenAfterFB.setAutoDraw(true);
    }

    frameRemains = 0.5 + durationBlank - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (screenAfterFB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      screenAfterFB.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of PracFeedb_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracFeedb_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'PracFeedb_2'-------
    for (const thisComponent of PracFeedb_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Store onset of feedbakc during practice
    psychoJS.experiment.addData('onsetFeedbPrac', startFeedb + practiceFeedback.tStart);
    // the Routine "PracFeedb_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_respAC_prac_allKeys;
var attentionCheckPracComponents;
function attentionCheckPracRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'attentionCheckPrac'-------
    t = 0;
    attentionCheckPracClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    key_respAC_prac.keys = undefined;
    key_respAC_prac.rt = undefined;
    _key_respAC_prac_allKeys = [];
    ac_stim_prac.setImage(Stim);
    Pos1_prac.setText(Loc1);
    Pos2_prac.setText(Loc2);
    Pos3_prac.setText(Loc3);
    Pos4_prac.setText(Loc4);
    // keep track of which components have finished
    attentionCheckPracComponents = [];
    attentionCheckPracComponents.push(key_respAC_prac);
    attentionCheckPracComponents.push(ac_stim_prac);
    attentionCheckPracComponents.push(Pos1_prac);
    attentionCheckPracComponents.push(Pos2_prac);
    attentionCheckPracComponents.push(Pos3_prac);
    attentionCheckPracComponents.push(Pos4_prac);
    attentionCheckPracComponents.push(taskAC_prac);
    
    for (const thisComponent of attentionCheckPracComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function attentionCheckPracRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'attentionCheckPrac'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = attentionCheckPracClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_respAC_prac* updates
    if (t >= 0.0 && key_respAC_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respAC_prac.tStart = t;  // (not accounting for frame time here)
      key_respAC_prac.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respAC_prac.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respAC_prac.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respAC_prac.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_respAC_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_respAC_prac.status = PsychoJS.Status.FINISHED;
  }

    if (key_respAC_prac.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respAC_prac.getKeys({keyList: ['up', 'down', 'left', 'right'], waitRelease: false});
      _key_respAC_prac_allKeys = _key_respAC_prac_allKeys.concat(theseKeys);
      if (_key_respAC_prac_allKeys.length > 0) {
        key_respAC_prac.keys = _key_respAC_prac_allKeys[0].name;  // just the first key pressed
        key_respAC_prac.rt = _key_respAC_prac_allKeys[0].rt;
        // was this correct?
        if (key_respAC_prac.keys == CorrAns) {
            key_respAC_prac.corr = 1;
        } else {
            key_respAC_prac.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ac_stim_prac* updates
    if (t >= 0.0 && ac_stim_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ac_stim_prac.tStart = t;  // (not accounting for frame time here)
      ac_stim_prac.frameNStart = frameN;  // exact frame index
      
      ac_stim_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ac_stim_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ac_stim_prac.setAutoDraw(false);
    }
    
    // *Pos1_prac* updates
    if (t >= 0.0 && Pos1_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos1_prac.tStart = t;  // (not accounting for frame time here)
      Pos1_prac.frameNStart = frameN;  // exact frame index
      
      Pos1_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos1_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos1_prac.setAutoDraw(false);
    }
    
    // *Pos2_prac* updates
    if (t >= 0.0 && Pos2_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos2_prac.tStart = t;  // (not accounting for frame time here)
      Pos2_prac.frameNStart = frameN;  // exact frame index
      
      Pos2_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos2_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos2_prac.setAutoDraw(false);
    }
    
    // *Pos3_prac* updates
    if (t >= 0.0 && Pos3_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos3_prac.tStart = t;  // (not accounting for frame time here)
      Pos3_prac.frameNStart = frameN;  // exact frame index
      
      Pos3_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos3_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos3_prac.setAutoDraw(false);
    }
    
    // *Pos4_prac* updates
    if (t >= 0.0 && Pos4_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos4_prac.tStart = t;  // (not accounting for frame time here)
      Pos4_prac.frameNStart = frameN;  // exact frame index
      
      Pos4_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos4_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos4_prac.setAutoDraw(false);
    }
    
    // *taskAC_prac* updates
    if (t >= 0.0 && taskAC_prac.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      taskAC_prac.tStart = t;  // (not accounting for frame time here)
      taskAC_prac.frameNStart = frameN;  // exact frame index
      
      taskAC_prac.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (taskAC_prac.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      taskAC_prac.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attentionCheckPracComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attentionCheckPracRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'attentionCheckPrac'-------
    for (const thisComponent of attentionCheckPracComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_respAC_prac.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_respAC_prac.corr = 1;  // correct non-response
      } else {
         key_respAC_prac.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_respAC_prac.keys', key_respAC_prac.keys);
    psychoJS.experiment.addData('key_respAC_prac.corr', key_respAC_prac.corr);
    if (typeof key_respAC_prac.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respAC_prac.rt', key_respAC_prac.rt);
        routineTimer.reset();
        }
    
    key_respAC_prac.stop();
    // Add accuracy in attention checks to output file 
    if (key_respAC_prac.corr) {
        AC_acc = 1;
        hits_in_attention += 1;
    } else {
        AC_acc = 0;
    }
    psychoJS.experiment.addData("AC_acc", AC_acc);
    
    return Scheduler.Event.NEXT;
  };
}


var _keyDisturbed_allKeys;
var disturbanceComponents;
function disturbanceRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'disturbance'-------
    t = 0;
    disturbanceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    keyDisturbed.keys = undefined;
    keyDisturbed.rt = undefined;
    _keyDisturbed_allKeys = [];
    // keep track of which components have finished
    disturbanceComponents = [];
    disturbanceComponents.push(disturbed);
    disturbanceComponents.push(keyDisturbed);
    
    for (const thisComponent of disturbanceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function disturbanceRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'disturbance'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = disturbanceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *disturbed* updates
    if (t >= 0.0 && disturbed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      disturbed.tStart = t;  // (not accounting for frame time here)
      disturbed.frameNStart = frameN;  // exact frame index
      
      disturbed.setAutoDraw(true);
    }

    
    // *keyDisturbed* updates
    if (t >= 0.0 && keyDisturbed.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyDisturbed.tStart = t;  // (not accounting for frame time here)
      keyDisturbed.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      keyDisturbed.clock.reset();
      keyDisturbed.start();
      keyDisturbed.clearEvents();
    }

    if (keyDisturbed.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyDisturbed.getKeys({keyList: ['1', '0'], waitRelease: false});
      _keyDisturbed_allKeys = _keyDisturbed_allKeys.concat(theseKeys);
      if (_keyDisturbed_allKeys.length > 0) {
        keyDisturbed.keys = _keyDisturbed_allKeys[_keyDisturbed_allKeys.length - 1].name;  // just the last key pressed
        keyDisturbed.rt = _keyDisturbed_allKeys[_keyDisturbed_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of disturbanceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function disturbanceRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'disturbance'-------
    for (const thisComponent of disturbanceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('keyDisturbed.keys', keyDisturbed.keys);
    if (typeof keyDisturbed.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('keyDisturbed.rt', keyDisturbed.rt);
        routineTimer.reset();
        }
    
    keyDisturbed.stop();
    // the Routine "disturbance" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var check_AC_acc;
var repsBonus;
var _key_endFail_allKeys;
var ContinueOrEndComponents;
function ContinueOrEndRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ContinueOrEnd'-------
    t = 0;
    ContinueOrEndClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    check_AC_acc = (Number.parseFloat(hits_in_attention) / 8.0);
    if ((check_AC_acc < 0.5)) {
        blockRepetitions = 0;
        repsBonus = 0;
        abortMsg = "Your accuracy in the attention checks is too low. \nYou have reached the end of the experiment. \nPress space to quit the experiment. Thank you!";
        numberQuits = 1;
    } else {
        blockRepetitions = 8;
        repsBonus = 1;
        abortMsg = "You passed the attention checks. \nYou are about to start the real task. \nHere, both your accuracy and speed matter for the experiment. \n[ Press space bar to START ]";
        numberQuits = 0;
    }
    
    messageChecks.setText(abortMsg);
    key_endFail.keys = undefined;
    key_endFail.rt = undefined;
    _key_endFail_allKeys = [];
    // keep track of which components have finished
    ContinueOrEndComponents = [];
    ContinueOrEndComponents.push(messageChecks);
    ContinueOrEndComponents.push(key_endFail);
    
    for (const thisComponent of ContinueOrEndComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ContinueOrEndRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ContinueOrEnd'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ContinueOrEndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *messageChecks* updates
    if (t >= 0.0 && messageChecks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      messageChecks.tStart = t;  // (not accounting for frame time here)
      messageChecks.frameNStart = frameN;  // exact frame index
      
      messageChecks.setAutoDraw(true);
    }

    
    // *key_endFail* updates
    if (t >= 0.0 && key_endFail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_endFail.tStart = t;  // (not accounting for frame time here)
      key_endFail.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_endFail.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_endFail.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_endFail.clearEvents(); });
    }

    if (key_endFail.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_endFail.getKeys({keyList: ['space'], waitRelease: false});
      _key_endFail_allKeys = _key_endFail_allKeys.concat(theseKeys);
      if (_key_endFail_allKeys.length > 0) {
        key_endFail.keys = _key_endFail_allKeys[_key_endFail_allKeys.length - 1].name;  // just the last key pressed
        key_endFail.rt = _key_endFail_allKeys[_key_endFail_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ContinueOrEndComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ContinueOrEndRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ContinueOrEnd'-------
    for (const thisComponent of ContinueOrEndComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ContinueOrEnd" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var quitExperimentComponents;
function quitExperimentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'quitExperiment'-------
    t = 0;
    quitExperimentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    psychoJS.quit();
    // keep track of which components have finished
    quitExperimentComponents = [];
    
    for (const thisComponent of quitExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function quitExperimentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'quitExperiment'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = quitExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quitExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quitExperimentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'quitExperiment'-------
    for (const thisComponent of quitExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "quitExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var MyIndicesMain;
var repsAC;
var _key_respStart_allKeys;
var LoopControl_2Components;
function LoopControl_2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'LoopControl_2'-------
    t = 0;
    LoopControl_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    thisBlock += 1;
    if ((thisBlock === 1)) {
        MyIndicesMain = "0:77";
    } else {
        if ((thisBlock === 2)) {
            MyIndicesMain = "77:154";
        } else {
            if ((thisBlock === 3)) {
                MyIndicesMain = "154:231";
            } else {
                if ((thisBlock === 4)) {
                    MyIndicesMain = "231:308";
                } else {
                    if ((thisBlock === 5)) {
                        MyIndicesMain = "308:385";
                    } else {
                        if ((thisBlock === 6)) {
                            MyIndicesMain = "385:462";
                        } else {
                            if ((thisBlock === 7)) {
                                MyIndicesMain = "462:539";
                            } else {
                                if ((thisBlock === 8)) {
                                    MyIndicesMain = "539:617";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    msgBlockNumber = (("You will start block " + thisBlock.toString()) + " out of 8. \nRemember that both accuracy and speed matter. \n[Press space bar to begin.]");
    if ((thisBlock === 4)) {
        repsAC = 1;
        numberACresults = 1;
    } else {
        repsAC = 0;
        numberACresults = 0;
    }
    
    beginBlock.setText(msgBlockNumber);
    key_respStart.keys = undefined;
    key_respStart.rt = undefined;
    _key_respStart_allKeys = [];
    // keep track of which components have finished
    LoopControl_2Components = [];
    LoopControl_2Components.push(beginBlock);
    LoopControl_2Components.push(key_respStart);
    
    for (const thisComponent of LoopControl_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function LoopControl_2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'LoopControl_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = LoopControl_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *beginBlock* updates
    if (t >= 0.0 && beginBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      beginBlock.tStart = t;  // (not accounting for frame time here)
      beginBlock.frameNStart = frameN;  // exact frame index
      
      beginBlock.setAutoDraw(true);
    }

    
    // *key_respStart* updates
    if (t >= 0.0 && key_respStart.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respStart.tStart = t;  // (not accounting for frame time here)
      key_respStart.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respStart.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respStart.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respStart.clearEvents(); });
    }

    if (key_respStart.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respStart.getKeys({keyList: ['space'], waitRelease: false});
      _key_respStart_allKeys = _key_respStart_allKeys.concat(theseKeys);
      if (_key_respStart_allKeys.length > 0) {
        key_respStart.keys = _key_respStart_allKeys[_key_respStart_allKeys.length - 1].name;  // just the last key pressed
        key_respStart.rt = _key_respStart_allKeys[_key_respStart_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of LoopControl_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function LoopControl_2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'LoopControl_2'-------
    for (const thisComponent of LoopControl_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "LoopControl_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var routineFixStart;
var fixation_mainComponents;
function fixation_mainRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'fixation_main'-------
    t = 0;
    fixation_mainClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Randomly picked float added to baselone 0.5s fixation cross presentation 
    fixTiming = Math.random(0, 0.5);
    jitter = (0.5 + fixTiming);
    routineFixStart = globalClock.getTime();
    // keep track of which components have finished
    fixation_mainComponents = [];
    fixation_mainComponents.push(fixcross_2);
    
    for (const thisComponent of fixation_mainComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function fixation_mainRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'fixation_main'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = fixation_mainClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *fixcross_2* updates
    if (frameN >= 0 && fixcross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      fixcross_2.tStart = t;  // (not accounting for frame time here)
      fixcross_2.frameNStart = frameN;  // exact frame index
      
      fixcross_2.setAutoDraw(true);
    }

    if (fixcross_2.status === PsychoJS.Status.STARTED && frameN >= (fixcross_2.frameNStart + jitter)) {
      fixcross_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of fixation_mainComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function fixation_mainRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'fixation_main'-------
    for (const thisComponent of fixation_mainComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Store onset of the fixation cross in the main task to the output file
    psychoJS.experiment.addData("fixcross_onsetMain", routineFixStart + fixcross_2.tStart);
    // the Routine "fixation_main" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var routineMainStart;
var crossDisappear_Main;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    imageP1.setImage(P1Loc);
    imageP2.setImage(P2Loc);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    ntrial += 1;
    trialReal = ntrial;
    psychoJS.experiment.addData("trialNumber", trialReal);
    routineMainStart = globalClock.getTime();
    crossDisappear_Main = 1;
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(imageP1);
    trialComponents.push(imageP2);
    trialComponents.push(key_resp);
    trialComponents.push(cross_objects);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *imageP1* updates
    if (t >= 0 && imageP1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageP1.tStart = t;  // (not accounting for frame time here)
      imageP1.frameNStart = frameN;  // exact frame index
      
      imageP1.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageP1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageP1.setAutoDraw(false);
    }
    
    // *imageP2* updates
    if (t >= 0 && imageP2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      imageP2.tStart = t;  // (not accounting for frame time here)
      imageP2.frameNStart = frameN;  // exact frame index
      
      imageP2.setAutoDraw(true);
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (imageP2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      imageP2.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[0].name;  // just the first key pressed
        key_resp.rt = _key_resp_allKeys[0].rt;
      }
    }
    
    // Change opacity of fixation cross when key is pressed 
    if ((key_resp.keys !== undefined)) {
        crossDisappear_Main = 0;
    }
    
    
    // *cross_objects* updates
    if (t >= 0.0 && cross_objects.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_objects.tStart = t;  // (not accounting for frame time here)
      cross_objects.frameNStart = frameN;  // exact frame index
      
      cross_objects.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_objects.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_objects.setAutoDraw(false);
    }
    
    if (cross_objects.status === PsychoJS.Status.STARTED){ // only update if being drawn
      cross_objects.setOpacity(crossDisappear_Main);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    // Catching response and calculating value; > 0 means correct
    if ((key_resp.keys === "left")) {
        valueDiff = (ValueP1 - ValueP2);
        psychoJS.experiment.addData("item_chosen_name", P1name);
        psychoJS.experiment.addData("item_chosen_value", ValueP1);
        psychoJS.experiment.addData("item_chosen_ID", P1id);
        psychoJS.experiment.addData("diff_chosen_minus_reject", valueDiff);
    } else {
        if ((key_resp.keys === "right")) {
            valueDiff = (ValueP2 - ValueP1);
            psychoJS.experiment.addData("item_chosen_name", P2name);
            psychoJS.experiment.addData("item_chosen_value", ValueP2);
            psychoJS.experiment.addData("item_chosen_ID", P2id);
            psychoJS.experiment.addData("diff_chosen_minus_reject", valueDiff);
        } else {
            if ((key_resp.keys === undefined)) {
                valueDiff = undefined;
                psychoJS.experiment.addData("item_chosen_name", 'No_response');
                psychoJS.experiment.addData("item_chosen_value", NaN);
                psychoJS.experiment.addData("item_chosen_ID", NaN);
                psychoJS.experiment.addData("diff_chosen_minus_reject", NaN);
                psychoJS.experiment.addData("key_resp.keys", NaN);
                psychoJS.experiment.addData("key_resp.rt", NaN);
            }
        }
    }
    
    // Calculating if items are neighbors or not 
    value_dist = (ValueP1 - ValueP2);
    value_dist_abs = Math.abs(value_dist);
    
    // Loop for giving accurate feedback after trial
    if ((InverseFb === 0)) {
        if ((key_resp.keys === undefined)) {
            msg = "TRY TO RESPOND FASTER";
            durationBlank = 0.5;
            acc_feedback = 2;
        } else {
            if (((valueDiff > 0) && (value_dist_abs === 1))) {
                msg = "WIN!";
                acc_feedback = 1;
                durationBlank = 0.5;
                hits_per_block = (hits_per_block + 1);
            } else {
                if (((valueDiff < 0) && (value_dist_abs === 1))) {
                    msg = "LOSS!";
                    durationBlank = 0.5;
                    acc_feedback = 0;
                } else {
                    if ((value_dist_abs > 1)) {
                        msg = "";
                        durationBlank = 0.0;
                        acc_feedback = 3;
                    }
                }
            }
        }
    }
    
    // Loop for providing inverse feedback
    if ((InverseFb === 1)) {
        if ((key_resp.keys === undefined)) {
            msg = "TRY TO RESPOND FASTER";
            durationBlank = 0.5;
            acc_feedback = 2;
        } else {
            if (((valueDiff < 0) && (value_dist_abs === 1))) {
                msg = "WIN!";
                durationBlank = 0.5;
                acc_feedback = 1;
                hits_per_block = (hits_per_block + 1);
            } else {
                if (((valueDiff > 0) && (value_dist_abs === 1))) {
                    msg = "LOSS!";
                    durationBlank = 0.5;
                    acc_feedback = 0;
                } else {
                    if ((value_dist_abs > 1)) {
                        msg = " ";
                        durationBlank = 0.0;
                        acc_feedback = 3;
                    }
                }
            }
        }
    }
    
    // saving the real feedback and hits
    if ((valueDiff === undefined)) {
        acc_real = 2;
    } else {
        if ((valueDiff > 0)) {
            acc_real = 1;
            hits_per_block_real = (hits_per_block_real + 1);
        } else {
            if ((valueDiff < 0)) {
                acc_real = 0;
            }
        }
    }
    
    // Add accuracy from this trial to an array. Add data to output file
    bonus_accuracies.push(acc_real);
    psychoJS.experiment.addData("acc_real", acc_real);
    psychoJS.experiment.addData("acc_feedback", acc_feedback);
    psychoJS.experiment.addData('P1_onset', routineMainStart + imageP1.tStart);
    psychoJS.experiment.addData('P2_onset', routineMainStart + imageP2.tStart);
    return Scheduler.Event.NEXT;
  };
}


var startFeedbMain;
var feedbackComponents;
function feedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    Feedback.setText(msg);
    // Store time when the feedback routine is starting 
    startFeedbMain = globalClock.getTime();
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(Feedback);
    feedbackComponents.push(blankScreen2);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function feedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'feedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Feedback* updates
    if (t >= 0.0 && Feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Feedback.tStart = t;  // (not accounting for frame time here)
      Feedback.frameNStart = frameN;  // exact frame index
      
      Feedback.setAutoDraw(true);
    }

    frameRemains = 0.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Feedback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Feedback.setAutoDraw(false);
    }
    
    // *blankScreen2* updates
    if (t >= 0.6 && blankScreen2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      blankScreen2.tStart = t;  // (not accounting for frame time here)
      blankScreen2.frameNStart = frameN;  // exact frame index
      
      blankScreen2.setAutoDraw(true);
    }

    frameRemains = 0.6 + durationBlank - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (blankScreen2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      blankScreen2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // Add onset of feedback message to output file
    psychoJS.experiment.addData('feedb_onset', startFeedbMain + Feedback.tStart);
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_respAC_allKeys;
var attentionCheckComponents;
function attentionCheckRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'attentionCheck'-------
    t = 0;
    attentionCheckClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.000000);
    // update component parameters for each repeat
    key_respAC.keys = undefined;
    key_respAC.rt = undefined;
    _key_respAC_allKeys = [];
    ac_stim.setImage(Stim);
    Pos1.setText(Loc1);
    Pos2.setText(Loc2);
    Pos3.setText(Loc3);
    Pos4.setText(Loc4);
    // keep track of which components have finished
    attentionCheckComponents = [];
    attentionCheckComponents.push(key_respAC);
    attentionCheckComponents.push(ac_stim);
    attentionCheckComponents.push(Pos1);
    attentionCheckComponents.push(Pos2);
    attentionCheckComponents.push(Pos3);
    attentionCheckComponents.push(Pos4);
    attentionCheckComponents.push(shapeInstructions);
    
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function attentionCheckRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'attentionCheck'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = attentionCheckClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_respAC* updates
    if (t >= 0.0 && key_respAC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respAC.tStart = t;  // (not accounting for frame time here)
      key_respAC.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respAC.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respAC.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respAC.clearEvents(); });
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_respAC.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_respAC.status = PsychoJS.Status.FINISHED;
  }

    if (key_respAC.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respAC.getKeys({keyList: ['up', 'down', 'left', 'right'], waitRelease: false});
      _key_respAC_allKeys = _key_respAC_allKeys.concat(theseKeys);
      if (_key_respAC_allKeys.length > 0) {
        key_respAC.keys = _key_respAC_allKeys[0].name;  // just the first key pressed
        key_respAC.rt = _key_respAC_allKeys[0].rt;
        // was this correct?
        if (key_respAC.keys == CorrAns) {
            key_respAC.corr = 1;
        } else {
            key_respAC.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *ac_stim* updates
    if (t >= 0.0 && ac_stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ac_stim.tStart = t;  // (not accounting for frame time here)
      ac_stim.frameNStart = frameN;  // exact frame index
      
      ac_stim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (ac_stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ac_stim.setAutoDraw(false);
    }
    
    // *Pos1* updates
    if (t >= 0.0 && Pos1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos1.tStart = t;  // (not accounting for frame time here)
      Pos1.frameNStart = frameN;  // exact frame index
      
      Pos1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos1.setAutoDraw(false);
    }
    
    // *Pos2* updates
    if (t >= 0.0 && Pos2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos2.tStart = t;  // (not accounting for frame time here)
      Pos2.frameNStart = frameN;  // exact frame index
      
      Pos2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos2.setAutoDraw(false);
    }
    
    // *Pos3* updates
    if (t >= 0.0 && Pos3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos3.tStart = t;  // (not accounting for frame time here)
      Pos3.frameNStart = frameN;  // exact frame index
      
      Pos3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos3.setAutoDraw(false);
    }
    
    // *Pos4* updates
    if (t >= 0.0 && Pos4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Pos4.tStart = t;  // (not accounting for frame time here)
      Pos4.frameNStart = frameN;  // exact frame index
      
      Pos4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Pos4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Pos4.setAutoDraw(false);
    }
    
    // *shapeInstructions* updates
    if (t >= 0.0 && shapeInstructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      shapeInstructions.tStart = t;  // (not accounting for frame time here)
      shapeInstructions.frameNStart = frameN;  // exact frame index
      
      shapeInstructions.setAutoDraw(true);
    }

    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (shapeInstructions.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      shapeInstructions.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attentionCheckComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attentionCheckRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'attentionCheck'-------
    for (const thisComponent of attentionCheckComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_respAC.keys === undefined) {
      if (['None','none',undefined].includes(CorrAns)) {
         key_respAC.corr = 1;  // correct non-response
      } else {
         key_respAC.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_respAC.keys', key_respAC.keys);
    psychoJS.experiment.addData('key_respAC.corr', key_respAC.corr);
    if (typeof key_respAC.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_respAC.rt', key_respAC.rt);
        routineTimer.reset();
        }
    
    key_respAC.stop();
    if (key_respAC.corr) {
        AC_acc = 1;
        hits_in_attention2 += 1;
    } else {
        AC_acc = 0;
    }
    thisExp.addData("AC_acc", AC_acc);
    
    return Scheduler.Event.NEXT;
  };
}


var check_AC_acc_2;
var _pressToEndExp_allKeys;
var ContinueOrEnd2Components;
function ContinueOrEnd2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'ContinueOrEnd2'-------
    t = 0;
    ContinueOrEnd2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    check_AC_acc_2 = (Number.parseFloat(hits_in_attention2) / 8.0);
    if ((check_AC_acc_2 < 0.5)) {
        msgEndExperiment = "Your accuracy in the attention checks is too low. \nYou have reached the end of the experiment. \nPress the space to quit the experiment. Thank you!";
        numberQuits2 = 1;
    } else {
        msgEndExperiment = "You passed the attention checks. \nPress space to see your feedback for the block.";
        numberQuits2 = 0;
    }
    
    textEndExperiment.setText(msgEndExperiment);
    pressToEndExp.keys = undefined;
    pressToEndExp.rt = undefined;
    _pressToEndExp_allKeys = [];
    // keep track of which components have finished
    ContinueOrEnd2Components = [];
    ContinueOrEnd2Components.push(textEndExperiment);
    ContinueOrEnd2Components.push(pressToEndExp);
    
    for (const thisComponent of ContinueOrEnd2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function ContinueOrEnd2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'ContinueOrEnd2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = ContinueOrEnd2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *textEndExperiment* updates
    if (t >= 0.0 && textEndExperiment.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      textEndExperiment.tStart = t;  // (not accounting for frame time here)
      textEndExperiment.frameNStart = frameN;  // exact frame index
      
      textEndExperiment.setAutoDraw(true);
    }

    
    // *pressToEndExp* updates
    if (t >= 0.0 && pressToEndExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pressToEndExp.tStart = t;  // (not accounting for frame time here)
      pressToEndExp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pressToEndExp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pressToEndExp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pressToEndExp.clearEvents(); });
    }

    if (pressToEndExp.status === PsychoJS.Status.STARTED) {
      let theseKeys = pressToEndExp.getKeys({keyList: ['space'], waitRelease: false});
      _pressToEndExp_allKeys = _pressToEndExp_allKeys.concat(theseKeys);
      if (_pressToEndExp_allKeys.length > 0) {
        pressToEndExp.keys = _pressToEndExp_allKeys[_pressToEndExp_allKeys.length - 1].name;  // just the last key pressed
        pressToEndExp.rt = _pressToEndExp_allKeys[_pressToEndExp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of ContinueOrEnd2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function ContinueOrEnd2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'ContinueOrEnd2'-------
    for (const thisComponent of ContinueOrEnd2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "ContinueOrEnd2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var quitExperiment2Components;
function quitExperiment2RoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'quitExperiment2'-------
    t = 0;
    quitExperiment2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    psychoJS.quit();
    // keep track of which components have finished
    quitExperiment2Components = [];
    
    for (const thisComponent of quitExperiment2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function quitExperiment2RoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'quitExperiment2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = quitExperiment2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of quitExperiment2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function quitExperiment2RoutineEnd(trials) {
  return function () {
    //------Ending Routine 'quitExperiment2'-------
    for (const thisComponent of quitExperiment2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "quitExperiment2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var previous_block_acc;
var _keynextBlock_allKeys;
var BlockFeedbackComponents;
function BlockFeedbackRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'BlockFeedback'-------
    t = 0;
    BlockFeedbackClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Calculate accuracy in the block and in attention checks
    previous_block_acc = (Number.parseFloat(hits_per_block_real) / ntrial);
    check_AC_acc = (hits_in_attention2 / 8);
    
    
    
    // Present messages depending on percentage of correct answers
    if ((previous_block_acc >= 0.8)) {
        msgBlock = "Amazing, your accuracy in the block was really high!\nRemember, the number of correct trials will determine the chance to get the bonus payment.";
    } else {
        if (((previous_block_acc < 0.8) && (previous_block_acc >= 0.6))) {
            msgBlock = "Your accuracy in the block was great! You are doing an excellent job!\nRemember, the number of correct trials will determine the chance to get the bonus payment.";
        } else {
            if (((previous_block_acc < 0.6) && (previous_block_acc >= 0.5))) {
                msgBlock = "Your accuracy in the block was good. However, there is still room for improvement!\nRemember, the number of correct trials will determine the chance to get the bonus payment.";
            } else {
                if ((previous_block_acc <= 0.5)) {
                    msgBlock = "Your accuracy in the block was a bit low. \nDon't give up! You will surely improve it.\nRemember, the number of correct trials will determine the chance to get the bonus payment.";
                }
            }
        }
    }
    
    feedbBlocks.setText(msgBlock);
    keynextBlock.keys = undefined;
    keynextBlock.rt = undefined;
    _keynextBlock_allKeys = [];
    // keep track of which components have finished
    BlockFeedbackComponents = [];
    BlockFeedbackComponents.push(feedbBlocks);
    BlockFeedbackComponents.push(keynextBlock);
    
    for (const thisComponent of BlockFeedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function BlockFeedbackRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'BlockFeedback'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = BlockFeedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *feedbBlocks* updates
    if (t >= 0.0 && feedbBlocks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbBlocks.tStart = t;  // (not accounting for frame time here)
      feedbBlocks.frameNStart = frameN;  // exact frame index
      
      feedbBlocks.setAutoDraw(true);
    }

    
    // *keynextBlock* updates
    if (t >= 0.0 && keynextBlock.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keynextBlock.tStart = t;  // (not accounting for frame time here)
      keynextBlock.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keynextBlock.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keynextBlock.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keynextBlock.clearEvents(); });
    }

    if (keynextBlock.status === PsychoJS.Status.STARTED) {
      let theseKeys = keynextBlock.getKeys({keyList: ['space'], waitRelease: false});
      _keynextBlock_allKeys = _keynextBlock_allKeys.concat(theseKeys);
      if (_keynextBlock_allKeys.length > 0) {
        keynextBlock.keys = _keynextBlock_allKeys[_keynextBlock_allKeys.length - 1].name;  // just the last key pressed
        keynextBlock.rt = _keynextBlock_allKeys[_keynextBlock_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of BlockFeedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BlockFeedbackRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'BlockFeedback'-------
    for (const thisComponent of BlockFeedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "BlockFeedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp2_allKeys;
var bonusComponents;
function bonusRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'bonus'-------
    t = 0;
    bonusClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Select a number of random trials from an array
    function getRandomSubarray(arr, size) {
        var shuffled = arr.slice(0), i = arr.length, temp, index;
        while (i--) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(0, size);
    }
    
    // Store 10 random trials in a variable and check their accuracy
    var sampled_accuracies = getRandomSubarray(bonus_accuracies, 10);
    var countBonuses = 0;
    for(var i = 0; i < sampled_accuracies.length; ++i){
        if(sampled_accuracies[i] == 1)
            countBonuses++;
    }
    
    // Update messages depending on number of accurate responses
    if (countBonuses > 5) {
        msgBonus = "Ten random responses from the main task were selected. \nCONGRATULATIONS! More than half of your responses were correct. \nYou will receive the BONUS! \n[Press space to continue]";
        get_bonus = 1;
        psychoJS.experiment.addData("Bonus", get_bonus);
    } else {
        msgBonus = "Sorry! Unfortunately, at least half of the ten randomly picked responses from the main task were not correct. \nYou cannot not receive the bonus \n[Press space to continue]";
        get_bonus = 0;
        psychoJS.experiment.addData("Bonus", get_bonus);
    }
    
    key_resp2.keys = undefined;
    key_resp2.rt = undefined;
    _key_resp2_allKeys = [];
    presentBonus.setText(msgBonus);
    // keep track of which components have finished
    bonusComponents = [];
    bonusComponents.push(key_resp2);
    bonusComponents.push(presentBonus);
    
    for (const thisComponent of bonusComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function bonusRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'bonus'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = bonusClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_resp2* updates
    if (t >= 0.0 && key_resp2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp2.tStart = t;  // (not accounting for frame time here)
      key_resp2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp2.clearEvents(); });
    }

    if (key_resp2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp2_allKeys = _key_resp2_allKeys.concat(theseKeys);
      if (_key_resp2_allKeys.length > 0) {
        key_resp2.keys = _key_resp2_allKeys[_key_resp2_allKeys.length - 1].name;  // just the last key pressed
        key_resp2.rt = _key_resp2_allKeys[_key_resp2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *presentBonus* updates
    if (t >= 0 && presentBonus.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      presentBonus.tStart = t;  // (not accounting for frame time here)
      presentBonus.frameNStart = frameN;  // exact frame index
      
      presentBonus.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of bonusComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function bonusRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'bonus'-------
    for (const thisComponent of bonusComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "bonus" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var modify;
var freeResponseComponents;
function freeResponseRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'freeResponse'-------
    t = 0;
    freeResponseClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // Variables for changing lower to upper case and for updating the text field
    modify = false;
    text.text = '';
    // keep track of which components have finished
    freeResponseComponents = [];
    freeResponseComponents.push(text);
    freeResponseComponents.push(ask_for_feedb);
    
    for (const thisComponent of freeResponseComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var textAdd;
function freeResponseRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'freeResponse'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = freeResponseClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    let theseKeys = psychoJS.eventManager.getKeys();
    if (theseKeys.length > 0) {  // at least one key was pressed
      textAdd = theseKeys[theseKeys.length-1]; 
      }
    
    
    if (textAdd === 'return') {
        textAdd = '';  // Add nothing
        continueRoutine = false;  // End routine (if that is what you want)
    } else if (textAdd === 'comma') {
        textAdd = ', ';  // Add a comma
    } else if (textAdd === 'space') {
        textAdd = ' ';  // Add a space
    } else if (textAdd === 'period') {
        textAdd = '. ';  // Add a point
    } else if (textAdd === 'backspace') {
        text.text = text.text.slice(0, -1);
        textAdd = undefined;
    } else if (['lshift', 'rshift'].includes(textAdd)) {
        modify = true;
    } else if (textAdd !== undefined) {
        if (modify) {
            text.text = text.text + textAdd.toUpperCase();
            modify = false;
        } else {
            text.text = text.text + textAdd
        }
        textAdd = undefined;
    }
    
    // *ask_for_feedb* updates
    if (t >= 0.0 && ask_for_feedb.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ask_for_feedb.tStart = t;  // (not accounting for frame time here)
      ask_for_feedb.frameNStart = frameN;  // exact frame index
      
      ask_for_feedb.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of freeResponseComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function freeResponseRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'freeResponse'-------
    for (const thisComponent of freeResponseComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData("comments", text.text);
    
    // the Routine "freeResponse" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_respEnd_allKeys;
var finishExperimentComponents;
function finishExperimentRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'finishExperiment'-------
    t = 0;
    finishExperimentClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_respEnd.keys = undefined;
    key_respEnd.rt = undefined;
    _key_respEnd_allKeys = [];
    // keep track of which components have finished
    finishExperimentComponents = [];
    finishExperimentComponents.push(finalText);
    finishExperimentComponents.push(key_respEnd);
    
    for (const thisComponent of finishExperimentComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function finishExperimentRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'finishExperiment'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = finishExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *finalText* updates
    if (t >= 0.0 && finalText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      finalText.tStart = t;  // (not accounting for frame time here)
      finalText.frameNStart = frameN;  // exact frame index
      
      finalText.setAutoDraw(true);
    }

    
    // *key_respEnd* updates
    if (t >= 0.0 && key_respEnd.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_respEnd.tStart = t;  // (not accounting for frame time here)
      key_respEnd.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_respEnd.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_respEnd.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_respEnd.clearEvents(); });
    }

    if (key_respEnd.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_respEnd.getKeys({keyList: ['space', 'Escape'], waitRelease: false});
      _key_respEnd_allKeys = _key_respEnd_allKeys.concat(theseKeys);
      if (_key_respEnd_allKeys.length > 0) {
        key_respEnd.keys = _key_respEnd_allKeys[_key_respEnd_allKeys.length - 1].name;  // just the last key pressed
        key_respEnd.rt = _key_respEnd_allKeys[_key_respEnd_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finishExperimentComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finishExperimentRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'finishExperiment'-------
    for (const thisComponent of finishExperimentComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "finishExperiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
