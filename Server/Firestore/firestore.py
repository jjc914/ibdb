import firebase_admin
from firebase_admin import credentials
from firebase_admin import db


# To get the service account key, go the project settings on firebase get a priv key from service accts


cred = credentials.Certificate("/home/daniel/Documents/Firebase/ibdb-6c905-firebase-adminsdk-bfpnb-f1b76649e3.json")
firebase_admin.initialize_app(cred, {'databaseURL' : 'https://ibdb-6c905-default-rtdb.asia-southeast1.firebasedatabase.app/'})

# _________________________________________________________DB REF_____________________________________________________ #

fullRef = db.reference('/') 
subjectRef = fullRef.child('subject')
userRef = fullRef.child('user')

# ______________________________________________________PHYSICS REF_____________________________________________________ #

physicsRef = subjectRef.child('physics')

# Atomic Physics
atomicPhysicsRef = physicsRef.child('atomicPhysics')
discreteEnergyandRadioactivityRef = atomicPhysicsRef.child('discreteEnergyandRadioactivity')
nuclearReactionsRef = atomicPhysicsRef.child('nuclearReactions')
structureOfMatterRef = atomicPhysicsRef.child('structureOfMatter')

# Circular Motion
circularMotionRef = physicsRef.child('circularMotion')
circularMotionChildRef = circularMotionRef.child('circularMotion')
gravitationRef = circularMotionRef.child('gravitation')

# Electricity and Magnetism
electricityandmagnetism = physicsRef.child('electricityandmagnetism')
cellsRef = electricityandmagnetism.child('cells')
currentsRef = electricityandmagnetism.child('currents')
electricFieldsRef = electricityandmagnetism.child('electricFields')
magnetismOfCurrentsRef = electricityandmagnetism.child('magnetismOfCurrents')

# Electromagnetic Induction
electromagneticInductionRef = physicsRef.child('electromagneticInduction')
powerGenerationandtransmissionRef = electromagneticInductionRef.child('powerGenerationandtransmission')
capacitanceRef = electromagneticInductionRef.child('capacitance')
electromagneticInductionRef = electromagneticInductionRef.child('electromagneticInduction')

# Energy Production
energyProductionRef = physicsRef.child('energyProduction')
energySourcesRef = energyProductionRef.child('energySources')
thermalEnergyTransferRef = energyProductionRef.child('thermalEnergyTransfer')

# Fields
fieldsRef = physicsRef.child('fields')
describingFieldsRef = fieldsRef.child('describingFields')
fieldsAtWorkRef = fieldsRef.child('fieldsAtWork')

# Measurements and Uncertainty
measurementsandUncertaintyRef = physicsRef.child('measurementsandUncertainty')
measurementsRef = measurementsandUncertaintyRef.child('measurements')
uncertaintyanderrorsRef = measurementsandUncertaintyRef.child('uncertaintyanderrors')
vectorsandscalarsRef = measurementsandUncertaintyRef.child('vectorsandscalars')

# Mechanics
mechanicsRef = physicsRef.child('mechanics')
forcesRef = mechanicsRef.child('forces')
momentumandimpulseRef = mechanicsRef.child('momentumandimpulse')
motionRef = mechanicsRef.child('motion')
workEnergyPowerRef = mechanicsRef.child('workEnergyPower')

# Quantum and Nuclear Physics
quantumandnuclearPhysicsRef = physicsRef.child('quantumandnuclearPhysics')
matterandradiationRef = quantumandnuclearPhysicsRef.child('matterandradiation')
nuclearPhysicsRef = quantumandnuclearPhysicsRef.child('nuclearPhysics')

# Thermal
thermalRef = physicsRef.child('thermal')
conceptsRef = thermalRef.child('concepts')
modellingGasRef = thermalRef.child('modellingGas')

# Wave Phenomena
wavePhenomenaRef = physicsRef.child('wavePhenomena')
dopplerEffectRef = wavePhenomenaRef.child('dopplerEffect')
harmonicMotionRef = wavePhenomenaRef.child('harmonicMotion')
interferenceRef = wavePhenomenaRef.child('interference')
resolutionRef = wavePhenomenaRef.child('resolution')
singleslitDiffractionRef = wavePhenomenaRef.child('single-slitDiffraction')

# Waves
wavesRef = physicsRef.child('waves')
oscillationsRef = wavesRef.child('oscillations')
standingWavesRef = wavesRef.child('standingWaves')
travellingWavesRef = wavesRef.child('travellingWaves')
waveBehaviourRef = wavesRef.child('waveBehaviour')
waveCharacteisticsRef = wavesRef.child('waveCharacteistics')




# ______________________________________________________MATHAA REF_____________________________________________________ #


mathAARef = subjectRef.child('mathAA')

# Calculus
calculusRef = mathAARef.child('calculus')
differentialEquationsRef = calculusRef.child('differentialEquations')
differentialCalculusRef = calculusRef.child('differentialCalculus')
integralCalculusRef = calculusRef.child('integralCalculus')
kinematicsRef = calculusRef.child('kinematics')
maclaurinSeriesRef = calculusRef.child('maclaurinSeries')

# Functions
functionsRef = mathAARef.child('functions')
exponentLogFunctionsRef = functionsRef.child('exponent-LogFunctions')
modulusandInequalitiesRef = functionsRef.child('modulusandInequalities')
polynomialsRef = functionsRef.child('polynomials')
propertiesOfFunctionsRef = functionsRef.child('propertiesOfFunctions')
quadraticsRef = functionsRef.child('quadratics')
rationalFunctionsRef = functionsRef.child('rationalFunctions')
transformationsRef = functionsRef.child('transformations')

# Geometry and Trignometry
geometryandTrignometryRef = mathAARef.child('geometryandTrignometry')
geometryandShapesRef = geometryandTrignometryRef.child('geometryandShapes')
trigonometricFunctionsRef = geometryandTrignometryRef.child('trigonometricFunctions')
vectorsRef = geometryandTrignometryRef.child('vectors')

# Numbers and Algebra
numbersandAlgebraRef = mathAARef.child('numbersandAlgebra')
binomialTheoremRef = numbersandAlgebraRef.child('binomialTheorem')
complexNumbersRef = numbersandAlgebraRef.child('complexNumbers')
countingPrinciplesRef = numbersandAlgebraRef.child('countingPrinciples')
exponentsandLogsRef = numbersandAlgebraRef.child('exponentsandLogs')
proofsRef = numbersandAlgebraRef.child('proofs')
sequencesandSeriesRef = numbersandAlgebraRef.child('sequencesandSeries')
systemsOfEquationsRef = numbersandAlgebraRef.child('systemsOfEquations')

# Statistics and Probability
statisticsandProbabilityRef = mathAARef.child('statisticsandProbability')
probabilityRef = statisticsandProbabilityRef.child('probability')
statisticsRef = statisticsandProbabilityRef.child('statistics')
bivariateStatisticsRef = statisticsandProbabilityRef.child('bivariateStatistics')
distributionsRef = statisticsandProbabilityRef.child('distributions')

# ______________________________________________________USER REF_____________________________________________________ #

userRef = fullRef.child('user')
# _________________________________________________________CHECKS_____________________________________________________ #

print(fullRef.get()) # if not printing check cred
print("________________________________________________________________________________________________________________")
print("_______________________________________________DB CONNECTION WORKS______________________________________________")





