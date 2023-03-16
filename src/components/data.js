export const questions = {
  "Thrombocytopenia": [
    { "Platelet count fall >50% AND platelet nadir ≥20": 2 },
    { "Platelet count fall 30–50% OR platelet nadir 10–19": 1 },
    { "Platelet count fall <30% OR platelet nadir <10": 0 },
  ],
  "Timing of platelet count fall": [
    { "Clear onset between days 5–10 OR platelet fall ≤1 day (prior heparin exposure within 30 days)": 2 },
    { "Consistent with days 5–10 fall, but not clear; onset after day 10 OR fall ≤1 day (prior heparin exposure 30–100 days ago)": 1 },
    { "Platelet count fall <4 days without recent exposure": 0 },
  ],
  "Thrombosis or other sequelae": [
    { "New thrombosis OR skin necrosis; acute systemic reaction post-IV heparin bolus": 2 },
    { "Progressive OR recurrent thrombosis; non-necrotizing skin lesions; suspected thrombosis (not proven)": 1 },
    { "None": 0 },
  ],
  "Other causes for thrombocytopenia": [
    { "None apparent": 2 },
    { "Possible": 1 },
    { "Definite": 0 },
  ],
};
//////////////////

export const ISTHquestions = {
  "Platelet count, cells x 109/L": [
    { "≥ 1000": 0 },
    { "50 to <100": 1 },
    { "<50": 2 },
  ],
  "Elevated levels of a fibrinrelated marker (e.g. Ddimer, fibrin degradation products": [
    { "No increase": 0},
    { "Moderateincrease": 2 },
    { "Severe increase": 3 },
  ],
  "Prolonged PT, seconds": [
    { "<3": 0 },
    { "3 to <6": 1 },
    { "≥6": 2 },
  ],
  "Fibrinogen level, g/L": [
    { "≥1": 0 },
    { "<1": 1 },
    
  ],
};

////////////////
export const SIRSquestions = {
  "Thrombocytopenia": [
    { "YES": 1 },
    { "NO": 0 },
  ],
  "hhhhhhhhhhhhhhh": [
    { "YES": 1 },
    { "NO": 0 },
  ],
  "Thrombosis or other sequelae": [
    { "YES": 1 },
    { "NO": 0 },
  ],
  "Other causes for thrombocytopenia":[
    { "YES": 1 },
    { "NO": 0 },
  ],
};
