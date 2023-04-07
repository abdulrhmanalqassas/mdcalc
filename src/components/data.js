export const questions = {
  Thrombocytopenia: [
    { "Platelet count fall >50% AND platelet nadir ≥20": 2 },
    { "Platelet count fall 30–50% OR platelet nadir 10–19": 1 },
    { "Platelet count fall <30% OR platelet nadir <10": 0 },
  ],
  "Timing of platelet count fall": [
    {
      "Clear onset between days 5–10 OR platelet fall ≤1 day (prior heparin exposure within 30 days)": 2,
    },
    {
      "Consistent with days 5–10 fall, but not clear; onset after day 10 OR fall ≤1 day (prior heparin exposure 30–100 days ago)": 1,
    },
    { "Platelet count fall <4 days without recent exposure": 0 },
  ],
  "Thrombosis or other sequelae": [
    {
      "New thrombosis OR skin necrosis; acute systemic reaction post-IV heparin bolus": 2,
    },
    {
      "Progressive OR recurrent thrombosis; non-necrotizing skin lesions; suspected thrombosis (not proven)": 1,
    },
    { None: 0 },
  ],
  "Other causes for thrombocytopenia": [
    { "None apparent": 2 },
    { Possible: 1 },
    { Definite: 0 },
  ],
};
//////////////////

export const ISTHquestions = {
  "Platelet count, cells x 109/L": [
    { "≥ 100": 0 },
    { "50 to <100": 1 },
    { "<50": 2 },
  ],
  "Elevated levels of a fibrinrelated marker (e.g. Ddimer, fibrin degradation products":
    [{ "No increase": 0 }, { Moderateincrease: 2 }, { "Severe increase": 3 }],
  "Prolonged PT, seconds": [{ "<3": 0 }, { "3 to <6": 1 }, { "≥6": 2 }],
  "Fibrinogen level, g/L": [{ "≥1": 0 }, { "<1": 1 }],
};

////////////////
export const SIRSquestions = {
  "Temp >38°C (100.4°F) or <36°C (96.8°F)": [{ YES: 1 }, { "no": 0 }],
  "Heart rate >90": [{ YES: 1 }, { "no": 0 }],
  "Respiratory rate >20 or PaCO₂ <32 mm Hg": [{ YES: 1 }, { "no": 0 }],
  "WBC >12,000/mm³, <4,000/mm³, or >10% bands": [{ YES: 1 }, { "no": 0 }],

  "Suspected or present source of infection": [{ YES: 0 }, { "no": 0 }],
  "Lactic acidosis, SBP <90 or SBP drop ≥40 mm Hg of normal": [
    { YES: 0},
    { "no": 0 },
  ],
  "Severe sepsis with hypotension, despite adequate fluid resuscitation": [
    { YES: 0 },
    { "no": 0 },
  ],
  "Evidence of ≥2 organs failing": [
    { YES: 0 },
    { "no": 0 },
  ],
};

//
export const khoronaQuestions = {
  "Cancer type": [
    { Stomach: 2 },
    { Pancreas: 2 },
    { Lung: 1 },
    { Lymphoma: 1 },
    { Gynecologic: 1 },
    { Bladder: 1 },
    { Testicular: 1 },
    { Other: 0 },
  ],
  "Pre-chemotherapy platelet count ≥350x10⁹/L": [{ YES: 1 }, { "no": 0 }],
  
  "Hemoglobin level <10 g/dL or using RBC growth factors": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Pre-chemotherapy leukocyte count >11x10⁹/L": [{ YES: 1 }, { "no": 0 }]
  , "BMI ≥35 kg/m^2 ": [{ YES: 1 }, { "no": 0 }],
};
//////////////////
export const HASquestions = {
  "Hypertension Uncontrolled, >160 mmHg systolic": [{ YES: 1 }, { "no": 0 }],
  "Renal disease Dialysis, transplant, Cr >2.26 mg/dL or >200 µmol/L": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Liver disease Cirrhosis or bilirubin >2x normal with AST/ALT/AP >3x normal":
    [{ YES: 1 }, { "no": 0 }],
  "Stroke history": [{ YES: 1 }, { "no": 0 }],
  "Prior major bleeding or predisposition to bleeding": [{ YES: 1 }, { "no": 0 }],
  "Labile INR Unstable/high INRs, time in therapeutic range <60%": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Age >65": [{ YES: 1 }, { "no": 0 }],
  "Medication usage predisposing to bleeding Aspirin, clopidogrel, NSAIDs": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Alchol use  ≥8 drinks/week": [
    { YES: 1 },
    { "no": 0 },
  ],
};

export const last = {
  "Hypertension Uncontrolled, >160 mmHg systolic": [{ YES: 1 }, { "no": 0 }],
  "Renal disease Dialysis, transplant, Cr >2.26 mg/dL or >200 µmol/L": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Liver disease Cirrhosis or bilirubin >2x normal with AST/ALT/AP >3x normal":
    [{ YES: 1 }, { "no": 0 }],
  "Stroke history": [{ YES: 1 }, { "no": 0 }],
  "Prior major bleeding or predisposition to bleeding": [{ YES: 1 }, { "no": 0 }],
  "Labile INR Unstable/high INRs, time in therapeutic range <60%": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Age >65": [{ YES: 1 }, { "no": 0 }],
  "Medication usage predisposing to bleeding Aspirin, clopidogrel, NSAIDs": [
    { YES: 1 },
    { "no": 0 },
  ],
  "Alchol use  ≥8 drinks/week": [
    { YES: 1 },
    { "no": 0 },
  ],
};
