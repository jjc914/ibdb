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
discreteEnergy&RadioactivityRef = atomicPhysicsRef.child('discreteEnergy&Radioactivity')
nuclearReactionsRef = atomicPhysicsRef.child('nuclearReactions')
structureOfMatterRef = atomicPhysicsRef.child('structureOfMatter')

# Circular Motion
circularMotionRef = physicsRef.child('circularMotion')
circularMotionChildRef = circularMotionRef.child('circularMotion')
gravitationRef = circularMotionRef.child('gravitation')

# Electricity & Magnetism
electricity&magnetism = physicsRef.child('electricity&magnetism')
cellsRef = electricity&magnetism.child('cells')
currentsRef = electricity&magnetism.child('currents')
electricFieldsRef = electricity&magnetism.child('electricFields')
magnetismOfCurrentsRef = electricity&magnetism.child('magnetismOfCurrents')

# Electromagnetic Induction
electromagneticInductionRef = physicsRef.child('electromagneticInduction')
powerGeneration&transmissionRef = electromagneticInductionRef.child('powerGeneration&transmission')
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

# Measurements & Uncertainty
measurements&UncertaintyRef = physicsRef.child('measurements&Uncertainty')
measurementsRef = measurements&UncertaintyRef.child('measurements')
uncertainty&errorsRef = measurements&UncertaintyRef.child('uncertainty&errors')
vectors&scalarsRef = measurements&UncertaintyRef.child('vectors&scalars')

# Mechanics
mechanicsRef = physicsRef.child('mechanics')
forcesRef = mechanicsRef.child('forces')
momentum&impulseRef = mechanicsRef.child('momentum&impulse')
motionRef = mechanicsRef.child('motion')
workEnergyPowerRef = mechanicsRef.child('workEnergyPower')

# Quantum & Nuclear Physics
quantum&nuclearPhysicsRef = physicsRef.child('quantum&nuclearPhysics')
matter&radiationRef = quantum&nuclearPhysicsRef.child('matter&radiation')
nuclearPhysicsRef = quantum&nuclearPhysicsRef.child('nuclearPhysics')

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
single-slitDiffractionRef = wavePhenomenaRef.child('single-slitDiffraction')

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
exponent-LogFunctionsRef = functionsRef.child('exponent-LogFunctions')
modulus&InequalitiesRef = functionsRef.child('modulus&Inequalities')
polynomialsRef = functionsRef.child('polynomials')
propertiesOfFunctionsRef = functionsRef.child('propertiesOfFunctions')
quadraticsRef = functionsRef.child('quadratics')
rationalFunctionsRef = functionsRef.child('rationalFunctions')
transformationsRef = functionsRef.child('transformations')

# Geometry & Trignometry
geometry&TrignometryRef = mathAARef.child('geometry&Trignometry')
geometry&ShapesRef = geometry&TrignometryRef.child('geometry&Shapes')
trigonometricFunctionsRef = geometry&TrignometryRef.child('trigonometricFunctions')
vectorsRef = geometry&TrignometryRef.child('vectors')

# Numbers & Algebra
numbers&AlgebraRef = mathAARef.child('numbers&Algebra')
binomialTheoremRef = numbers&AlgebraRef.child('binomialTheorem')
complexNumbersRef = numbers&AlgebraRef.child('complexNumbers')
countingPrinciplesRef = numbers&AlgebraRef.child('countingPrinciples')
exponents&LogsRef = numbers&AlgebraRef.child('exponents&Logs')
proofsRef = numbers&AlgebraRef.child('proofs')
sequences&SeriesRef = numbers&AlgebraRef.child('sequences&Series')
systemsOfEquationsRef = numbers&AlgebraRef.child('systemsOfEquations')

# Statistics & Probability
statistics&ProbabilityRef = mathAARef.child('statistics&Probability')
probabilityRef = statistics&ProbabilityRef.child('probability')
statisticsRef = statistics&ProbabilityRef.child('statistics')
bivariateStatisticsRef = statistics&ProbabilityRef.child('bivariateStatistics')
distributionsRef = statistics&ProbabilityRef.child('distributions')

# ______________________________________________________USER REF_____________________________________________________ #

userRef = fullRef.child('user')
# _________________________________________________________CHECKS_____________________________________________________ #

print(fullRef.get()) # if not printing check cred
print("________________________________________________________________________________________________________________")
print("_______________________________________________DB CONNECTION WORKS______________________________________________")





