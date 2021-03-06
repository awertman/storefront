var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log(req.body)
  res.send({locations: taxiData})
});

module.exports = router;


taxiData = {

  realEstate: [
              {latitude: 37.774546, longitude:-122.433523},
              {latitude: 37.784386, longitude: -122.439790},
              {latitude: 37.783383, longitude: -122.439594},
              {latitude: 37.784271, longitude: -122.399538},
              {latitude: 37.785500, longitude: -122.393650}
            ],

  business: [
              {latitude: 37.782551, longitude: -122.445368},
              {latitude: 37.782745, longitude: -122.444586},
              {latitude: 37.782842, longitude: -122.443688},
              {latitude: 37.782919, longitude: -122.442815},
              {latitude: 37.782992, longitude: -122.442112},
              {latitude: 37.783100, longitude: -122.441461},
              {latitude: 37.783206, longitude: -122.440829},
              {latitude: 37.783273, longitude: -122.440324},
              {latitude: 37.783316, longitude: -122.440023},
              {latitude: 37.783357, longitude: -122.439794},
              {latitude: 37.783371, longitude: -122.439687},
              {latitude: 37.783368, longitude: -122.439666},
              {latitude: 37.783383, longitude: -122.439594},
              {latitude: 37.783508, longitude: -122.439525},
              {latitude: 37.783842, longitude: -122.439591},
              {latitude: 37.784147, longitude: -122.439668},
              {latitude: 37.784206, longitude: -122.439686},
              {latitude: 37.784386, longitude: -122.439790},
              {latitude: 37.784701, longitude: -122.439902},
              {latitude: 37.784965, longitude: -122.439938},
              {latitude: 37.785010, longitude: -122.439947},
              {latitude: 37.785360, longitude: -122.439952},
              {latitude: 37.785715, longitude: -122.440030},
              {latitude: 37.786117, longitude: -122.440119},
              {latitude: 37.786564, longitude: -122.440209},
              {latitude: 37.786905, longitude: -122.440270},
              {latitude: 37.786956, longitude: -122.440279},
              {latitude: 37.800224, longitude: -122.433520},
              {latitude: 37.800155, longitude: -122.434101},
              {latitude: 37.800160, longitude: -122.434430},
              {latitude: 37.800378, longitude: -122.434527},
              {latitude: 37.800738, longitude: -122.434598},
              {latitude: 37.800938, longitude: -122.434650},
              {latitude: 37.801024, longitude: -122.434889},
              {latitude: 37.800955, longitude: -122.435392},
              {latitude: 37.800886, longitude: -122.435959},
              {latitude: 37.800811, longitude: -122.436275},
              {latitude: 37.800788, longitude: -122.436299},
              {latitude: 37.800719, longitude: -122.436302},
              {latitude: 37.800702, longitude: -122.436298},
              {latitude: 37.800661, longitude: -122.436273},
              {latitude: 37.800395, longitude: -122.436172},
              {latitude: 37.800228, longitude: -122.436116},
              {latitude: 37.800169, longitude: -122.436130},
              {latitude: 37.800066, longitude: -122.436167},
              {latitude: 37.784345, longitude: -122.422922},
              {latitude: 37.784389, longitude: -122.422926},
              {latitude: 37.784437, longitude: -122.422924},
              {latitude: 37.784746, longitude: -122.422818},
              {latitude: 37.785436, longitude: -122.422959},
              {latitude: 37.786120, longitude: -122.423112},
              {latitude: 37.786433, longitude: -122.423029},
              {latitude: 37.786631, longitude: -122.421213},
              {latitude: 37.786660, longitude: -122.421033},
              {latitude: 37.786801, longitude: -122.420141},
              {latitude: 37.786823, longitude: -122.420034},
              {latitude: 37.786831, longitude: -122.419916},
              {latitude: 37.787034, longitude: -122.418208},
              {latitude: 37.787056, longitude: -122.418034},
              {latitude: 37.787169, longitude: -122.417145},
              {latitude: 37.787217, longitude: -122.416715},
              {latitude: 37.786144, longitude: -122.416403},
              {latitude: 37.785292, longitude: -122.416257},
              {latitude: 37.780666, longitude: -122.390374},
              {latitude: 37.780501, longitude: -122.391281},
              {latitude: 37.780148, longitude: -122.392052},
              {latitude: 37.780173, longitude: -122.391148},
              {latitude: 37.780693, longitude: -122.390592},
              {latitude: 37.781261, longitude: -122.391142},
              {latitude: 37.781808, longitude: -122.391730},
              {latitude: 37.782340, longitude: -122.392341},
              {latitude: 37.782812, longitude: -122.393022},
              {latitude: 37.783300, longitude: -122.393672},
              {latitude: 37.783809, longitude: -122.394275},
              {latitude: 37.784246, longitude: -122.394979},
              {latitude: 37.784791, longitude: -122.395958},
              {latitude: 37.785675, longitude: -122.396746},
              {latitude: 37.786262, longitude: -122.395780},
              {latitude: 37.786776, longitude: -122.395093},
              {latitude: 37.787282, longitude: -122.394426},
              {latitude: 37.787783, longitude: -122.393767},
              {latitude: 37.788343, longitude: -122.393184},
              {latitude: 37.788895, longitude: -122.392506},
              {latitude: 37.789371, longitude: -122.391701},
              {latitude: 37.789722, longitude: -122.390952},
              {latitude: 37.790315, longitude: -122.390305},
              {latitude: 37.790738, longitude: -122.389616},
              {latitude: 37.779448, longitude: -122.438702},
              {latitude: 37.779023, longitude: -122.438585},
              {latitude: 37.778542, longitude: -122.438492},
              {latitude: 37.778100, longitude: -122.438411},
              {latitude: 37.777986, longitude: -122.438376},
              {latitude: 37.777680, longitude: -122.438313},
              {latitude: 37.777316, longitude: -122.438273},
              {latitude: 37.777135, longitude: -122.438254},
              {latitude: 37.776987, longitude: -122.438303},
              {latitude: 37.776946, longitude: -122.438404},
              {latitude: 37.776944, longitude: -122.438467},
              {latitude: 37.776892, longitude: -122.438459},
              {latitude: 37.776842, longitude: -122.438442},
              {latitude: 37.776822, longitude: -122.438391},
              {latitude: 37.776814, longitude: -122.438412},
              {latitude: 37.776787, longitude: -122.438628},
              {latitude: 37.776729, longitude: -122.438650},
              {latitude: 37.776759, longitude: -122.438677},
              {latitude: 37.776772, longitude: -122.438498},
              {latitude: 37.776787, longitude: -122.438389},
              {latitude: 37.776848, longitude: -122.438283},
              {latitude: 37.776870, longitude: -122.438239},
              {latitude: 37.777015, longitude: -122.438198},
              {latitude: 37.777333, longitude: -122.438256},
              {latitude: 37.777595, longitude: -122.438308},
              {latitude: 37.777797, longitude: -122.438344},
              {latitude: 37.778160, longitude: -122.438442},
              {latitude: 37.778414, longitude: -122.438508},
              {latitude: 37.778445, longitude: -122.438516},
              {latitude: 37.778503, longitude: -122.438529},
              {latitude: 37.778607, longitude: -122.438549},
              {latitude: 37.778670, longitude: -122.438644},
              {latitude: 37.778847, longitude: -122.438706},
              {latitude: 37.779240, longitude: -122.438744},
              {latitude: 37.779738, longitude: -122.438822},
              {latitude: 37.780201, longitude: -122.438882},
              {latitude: 37.780400, longitude: -122.438905},
              {latitude: 37.780501, longitude: -122.438921},
              {latitude: 37.780892, longitude: -122.438986},
              {latitude: 37.781446, longitude: -122.439087},
              {latitude: 37.781985, longitude: -122.439199},
              {latitude: 37.782239, longitude: -122.439249},
              {latitude: 37.782286, longitude: -122.439266},
              {latitude: 37.797847, longitude: -122.429388},
              {latitude: 37.797874, longitude: -122.429180},
              {latitude: 37.797885, longitude: -122.429069},
              {latitude: 37.797887, longitude: -122.429050},
              {latitude: 37.797933, longitude: -122.428954},
              {latitude: 37.798242, longitude: -122.428990},
              {latitude: 37.798617, longitude: -122.429075},
              {latitude: 37.798719, longitude: -122.429092},
              {latitude: 37.798944, longitude: -122.429145},
              {latitude: 37.799320, longitude: -122.429251},
              {latitude: 37.799590, longitude: -122.429309},
              {latitude: 37.799677, longitude: -122.429324},
              {latitude: 37.799966, longitude: -122.429360},
              {latitude: 37.800288, longitude: -122.429430},
              {latitude: 37.800443, longitude: -122.429461},
              {latitude: 37.800465, longitude: -122.429474},
              {latitude: 37.800644, longitude: -122.429540},
              {latitude: 37.800948, longitude: -122.429620},
              {latitude: 37.801242, longitude: -122.429685},
              {latitude: 37.801375, longitude: -122.429702},
              {latitude: 37.801400, longitude: -122.429703},
              {latitude: 37.801453, longitude: -122.429707},
              {latitude: 37.801473, longitude: -122.429709},
              {latitude: 37.801532, longitude: -122.429707},
              {latitude: 37.801852, longitude: -122.429729},
              {latitude: 37.802173, longitude: -122.429789},
              {latitude: 37.802459, longitude: -122.429847},
              {latitude: 37.802554, longitude: -122.429825},
              {latitude: 37.802647, longitude: -122.429549},
              {latitude: 37.802693, longitude: -122.429179},
              {latitude: 37.802729, longitude: -122.428751},
              {latitude: 37.766104, longitude: -122.409291},
              {latitude: 37.766103, longitude: -122.409268},
              {latitude: 37.766138, longitude: -122.409229},
              {latitude: 37.766183, longitude: -122.409231},
              {latitude: 37.766153, longitude: -122.409276},
              {latitude: 37.766005, longitude: -122.409365},
              {latitude: 37.765897, longitude: -122.409570},
              {latitude: 37.765767, longitude: -122.409739},
              {latitude: 37.765693, longitude: -122.410389},
              {latitude: 37.765615, longitude: -122.411201},
              {latitude: 37.765533, longitude: -122.412121},
              {latitude: 37.765467, longitude: -122.412939},
              {latitude: 37.765444, longitude: -122.414821},
              {latitude: 37.765444, longitude: -122.414964},
              {latitude: 37.765318, longitude: -122.415424},
              {latitude: 37.763961, longitude: -122.415296},
              {latitude: 37.763115, longitude: -122.415196},
              {latitude: 37.762967, longitude: -122.415183},
              {latitude: 37.762278, longitude: -122.415127},
              {latitude: 37.761675, longitude: -122.415055},
              {latitude: 37.760932, longitude: -122.414988},
              {latitude: 37.759337, longitude: -122.414862},
              {latitude: 37.773187, longitude: -122.421922},
              {latitude: 37.773043, longitude: -122.422118},
              {latitude: 37.773007, longitude: -122.422165},
              {latitude: 37.772979, longitude: -122.422219},
              {latitude: 37.772865, longitude: -122.422394},
              {latitude: 37.772779, longitude: -122.422503},
              {latitude: 37.772676, longitude: -122.422701},
              {latitude: 37.772606, longitude: -122.422806},
              {latitude: 37.772566, longitude: -122.422840},
              {latitude: 37.772508, longitude: -122.422852},
              {latitude: 37.772387, longitude: -122.423011},
              {latitude: 37.772099, longitude: -122.423328},
              {latitude: 37.771704, longitude: -122.423783},
              {latitude: 37.771481, longitude: -122.424081},
              {latitude: 37.771400, longitude: -122.424179},
              {latitude: 37.771352, longitude: -122.424220},
              {latitude: 37.771248, longitude: -122.424327},
              {latitude: 37.770904, longitude: -122.424781},
              {latitude: 37.770520, longitude: -122.425283},
              {latitude: 37.770337, longitude: -122.425553},
              {latitude: 37.770128, longitude: -122.425832},
              {latitude: 37.769756, longitude: -122.426331},
              {latitude: 37.769300, longitude: -122.426902},
              {latitude: 37.769132, longitude: -122.427065},
              {latitude: 37.769092, longitude: -122.427103},
              {latitude: 37.768979, longitude: -122.427172},
              {latitude: 37.768595, longitude: -122.427634},
              {latitude: 37.768372, longitude: -122.427913},
              {latitude: 37.768337, longitude: -122.427961},
              {latitude: 37.768244, longitude: -122.428138},
              {latitude: 37.767942, longitude: -122.428581},
              {latitude: 37.767482, longitude: -122.429094},
              {latitude: 37.767031, longitude: -122.429606},
              {latitude: 37.766732, longitude: -122.429986},
              {latitude: 37.766680, longitude: -122.430058},
              {latitude: 37.766633, longitude: -122.430109},
              {latitude: 37.766580, longitude: -122.430211},
              {latitude: 37.766367, longitude: -122.430594},
              {latitude: 37.765910, longitude: -122.431137},
              {latitude: 37.765353, longitude: -122.431806},
              {latitude: 37.764962, longitude: -122.432298},
              {latitude: 37.764868, longitude: -122.432486},
              {latitude: 37.764518, longitude: -122.432913},
              {latitude: 37.763435, longitude: -122.434173},
              {latitude: 37.762847, longitude: -122.434953},
              {latitude: 37.762291, longitude: -122.435935},
              {latitude: 37.762224, longitude: -122.436074},
              {latitude: 37.761957, longitude: -122.436892},
              {latitude: 37.761652, longitude: -122.438886},
              {latitude: 37.761284, longitude: -122.439955},
              {latitude: 37.761210, longitude: -122.440068},
              {latitude: 37.761064, longitude: -122.440720},
              {latitude: 37.761040, longitude: -122.441411},
              {latitude: 37.761048, longitude: -122.442324},
              {latitude: 37.760851, longitude: -122.443118},
              {latitude: 37.759977, longitude: -122.444591},
              {latitude: 37.759913, longitude: -122.444698},
              {latitude: 37.759623, longitude: -122.445065},
              {latitude: 37.758902, longitude: -122.445158},
              {latitude: 37.758428, longitude: -122.444570},
              {latitude: 37.757687, longitude: -122.443340},
              {latitude: 37.757583, longitude: -122.443240},
              {latitude: 37.757019, longitude: -122.442787},
              {latitude: 37.756603, longitude: -122.442322},
              {latitude: 37.756380, longitude: -122.441602},
              {latitude: 37.755790, longitude: -122.441382},
              {latitude: 37.754493, longitude: -122.442133},
              {latitude: 37.754361, longitude: -122.442206},
              {latitude: 37.753719, longitude: -122.442650},
              {latitude: 37.753096, longitude: -122.442915},
              {latitude: 37.751617, longitude: -122.443211},
              {latitude: 37.751496, longitude: -122.443246},
              {latitude: 37.750733, longitude: -122.443428},
              {latitude: 37.750126, longitude: -122.443536},
              {latitude: 37.750103, longitude: -122.443784},
              {latitude: 37.750390, longitude: -122.444010},
              {latitude: 37.750448, longitude: -122.444013},
              {latitude: 37.750536, longitude: -122.444040},
              {latitude: 37.750493, longitude: -122.444141},
              {latitude: 37.790859, longitude: -122.402808},
              {latitude: 37.790864, longitude: -122.402768},
              {latitude: 37.790995, longitude: -122.402539},
              {latitude: 37.791148, longitude: -122.402172},
              {latitude: 37.791385, longitude: -122.401312},
              {latitude: 37.791405, longitude: -122.400776},
              {latitude: 37.791288, longitude: -122.400528},
              {latitude: 37.791113, longitude: -122.400441},
              {latitude: 37.791027, longitude: -122.400395},
              {latitude: 37.791094, longitude: -122.400311},
              {latitude: 37.791211, longitude: -122.400183},
              {latitude: 37.791060, longitude: -122.399334},
              {latitude: 37.790538, longitude: -122.398718},
              {latitude: 37.790095, longitude: -122.398086},
              {latitude: 37.789644, longitude: -122.397360},
              {latitude: 37.789254, longitude: -122.396844},
              {latitude: 37.788855, longitude: -122.396397},
              {latitude: 37.788483, longitude: -122.395963},
              {latitude: 37.788015, longitude: -122.395365},
              {latitude: 37.787558, longitude: -122.394735},
              {latitude: 37.787472, longitude: -122.394323},
              {latitude: 37.787630, longitude: -122.394025},
              {latitude: 37.787767, longitude: -122.393987},
              {latitude: 37.787486, longitude: -122.394452},
              {latitude: 37.786977, longitude: -122.395043},
              {latitude: 37.786583, longitude: -122.395552},
              {latitude: 37.786540, longitude: -122.395610},
              {latitude: 37.786516, longitude: -122.395659},
              {latitude: 37.786378, longitude: -122.395707},
              {latitude: 37.786044, longitude: -122.395362},
              {latitude: 37.785598, longitude: -122.394715},
              {latitude: 37.785321, longitude: -122.394361},
              {latitude: 37.785207, longitude: -122.394236},
              {latitude: 37.785751, longitude: -122.394062},
              {latitude: 37.785996, longitude: -122.393881},
              {latitude: 37.786092, longitude: -122.393830},
              {latitude: 37.785998, longitude: -122.393899},
              {latitude: 37.785114, longitude: -122.394365},
              {latitude: 37.785022, longitude: -122.394441},
              {latitude: 37.784823, longitude: -122.394635},
              {latitude: 37.784719, longitude: -122.394629},
              {latitude: 37.785069, longitude: -122.394176},
              {latitude: 37.785500, longitude: -122.393650},
              {latitude: 37.785770, longitude: -122.393291},
              {latitude: 37.785839, longitude: -122.393159},
              {latitude: 37.782651, longitude: -122.400628},
              {latitude: 37.782616, longitude: -122.400599},
              {latitude: 37.782702, longitude: -122.400470},
              {latitude: 37.782915, longitude: -122.400192},
              {latitude: 37.783137, longitude: -122.399887},
              {latitude: 37.783414, longitude: -122.399519},
              {latitude: 37.783629, longitude: -122.399237},
              {latitude: 37.783688, longitude: -122.399157},
              {latitude: 37.783716, longitude: -122.399106},
              {latitude: 37.783798, longitude: -122.399072},
              {latitude: 37.783997, longitude: -122.399186},
              {latitude: 37.784271, longitude: -122.399538},
              {latitude: 37.784577, longitude: -122.399948},
              {latitude: 37.784828, longitude: -122.400260},
              {latitude: 37.784999, longitude: -122.400477},
              {latitude: 37.785113, longitude: -122.400651},
              {latitude: 37.785155, longitude: -122.400703},
              {latitude: 37.785192, longitude: -122.400749},
              {latitude: 37.785278, longitude: -122.400839},
              {latitude: 37.785387, longitude: -122.400857},
              {latitude: 37.785478, longitude: -122.400890},
              {latitude: 37.785526, longitude: -122.401022},
              {latitude: 37.785598, longitude: -122.401148},
              {latitude: 37.785631, longitude: -122.401202},
              {latitude: 37.785660, longitude: -122.401267},
              {latitude: 37.803986, longitude: -122.426035},
              {latitude: 37.804102, longitude: -122.425089},
              {latitude: 37.804211, longitude: -122.424156},
              {latitude: 37.803861, longitude: -122.423385},
              {latitude: 37.803151, longitude: -122.423214},
              {latitude: 37.802439, longitude: -122.423077},
              {latitude: 37.801740, longitude: -122.422905},
              {latitude: 37.801069, longitude: -122.422785},
              {latitude: 37.800345, longitude: -122.422649},
              {latitude: 37.799633, longitude: -122.422603},
              {latitude: 37.799750, longitude: -122.421700},
              {latitude: 37.799885, longitude: -122.420854},
              {latitude: 37.799209, longitude: -122.420607},
              {latitude: 37.795656, longitude: -122.400395},
              {latitude: 37.795203, longitude: -122.400304},
              {latitude: 37.778738, longitude: -122.415584},
              {latitude: 37.778812, longitude: -122.415189},
              {latitude: 37.778824, longitude: -122.415092},
              {latitude: 37.778833, longitude: -122.414932},
              {latitude: 37.778834, longitude: -122.414898},
              {latitude: 37.778740, longitude: -122.414757},
              {latitude: 37.778501, longitude: -122.414433},
              {latitude: 37.778182, longitude: -122.414026},
              {latitude: 37.777851, longitude: -122.413623},
              {latitude: 37.777486, longitude: -122.413166},
              {latitude: 37.777109, longitude: -122.412674},
              {latitude: 37.776743, longitude: -122.412186},
              {latitude: 37.776440, longitude: -122.411800},
              {latitude: 37.776295, longitude: -122.411614},
              {latitude: 37.776158, longitude: -122.411440},
              {latitude: 37.775806, longitude: -122.410997},
              {latitude: 37.775422, longitude: -122.410484},
              {latitude: 37.775126, longitude: -122.410087},
              {latitude: 37.775012, longitude: -122.409854},
              {latitude: 37.775164, longitude: -122.409573},
              {latitude: 37.775498, longitude: -122.409180},
              {latitude: 37.775868, longitude: -122.408730},
              {latitude: 37.776256, longitude: -122.408240},
              {latitude: 37.776519, longitude: -122.407928},
              {latitude: 37.776539, longitude: -122.407904},
              {latitude: 37.776595, longitude: -122.407854},
              {latitude: 37.776853, longitude: -122.407547},
              {latitude: 37.777234, longitude: -122.407087},
              {latitude: 37.777644, longitude: -122.406558},
              {latitude: 37.778066, longitude: -122.406017},
              {latitude: 37.778468, longitude: -122.405499},
              {latitude: 37.778866, longitude: -122.404995},
              {latitude: 37.779295, longitude: -122.404455},
              {latitude: 37.779695, longitude: -122.403950},
              {latitude: 37.779982, longitude: -122.403584},
              {latitude: 37.780295, longitude: -122.403223},
              {latitude: 37.780664, longitude: -122.402766},
              {latitude: 37.781043, longitude: -122.402288},
              {latitude: 37.781399, longitude: -122.401823},
              {latitude: 37.781727, longitude: -122.401407},
              {latitude: 37.781853, longitude: -122.401247},
              {latitude: 37.781894, longitude: -122.401195},
              {latitude: 37.782076, longitude: -122.400977},
              {latitude: 37.782338, longitude: -122.400603},
              {latitude: 37.782666, longitude: -122.400133},
              {latitude: 37.783048, longitude: -122.399634},
              {latitude: 37.783450, longitude: -122.399198},
              {latitude: 37.783791, longitude: -122.398998},
              {latitude: 37.784177, longitude: -122.398959},
              {latitude: 37.784388, longitude: -122.398971},
              {latitude: 37.784404, longitude: -122.399128},
              {latitude: 37.784586, longitude: -122.399524},
              {latitude: 37.784835, longitude: -122.399927},
              {latitude: 37.785116, longitude: -122.400307},
              {latitude: 37.785282, longitude: -122.400539},
              {latitude: 37.785346, longitude: -122.400692},
              {latitude: 37.765769, longitude: -122.407201},
              {latitude: 37.765790, longitude: -122.407414},
              {latitude: 37.765802, longitude: -122.407755},
              {latitude: 37.765791, longitude: -122.408219},
              {latitude: 37.765763, longitude: -122.408759},
              {latitude: 37.765726, longitude: -122.409348},
              {latitude: 37.765716, longitude: -122.409882},
              {latitude: 37.765708, longitude: -122.410202},
              {latitude: 37.765705, longitude: -122.410253},
              {latitude: 37.765707, longitude: -122.410369},
              {latitude: 37.765692, longitude: -122.410720},
              {latitude: 37.765699, longitude: -122.411215},
              {latitude: 37.765687, longitude: -122.411789},
              {latitude: 37.765666, longitude: -122.412373},
              {latitude: 37.765598, longitude: -122.412883},
              {latitude: 37.765543, longitude: -122.413039},
              {latitude: 37.765532, longitude: -122.413125},
              {latitude: 37.765500, longitude: -122.413553},
              {latitude: 37.765448, longitude: -122.414053},
              {latitude: 37.765388, longitude: -122.414645},
              {latitude: 37.765323, longitude: -122.415250},
              {latitude: 37.765303, longitude: -122.415847},
              {latitude: 37.765251, longitude: -122.416439},
              {latitude: 37.765204, longitude: -122.417020},
              {latitude: 37.765172, longitude: -122.417556},
              {latitude: 37.765164, longitude: -122.418075},
              {latitude: 37.765153, longitude: -122.418618},
              {latitude: 37.765136, longitude: -122.419112},
              {latitude: 37.765129, longitude: -122.419378},
              {latitude: 37.765119, longitude: -122.419481},
              {latitude: 37.765100, longitude: -122.419852},
              {latitude: 37.765083, longitude: -122.420349},
              {latitude: 37.765045, longitude: -122.420930},
              {latitude: 37.764992, longitude: -122.421481},
              {latitude: 37.764980, longitude: -122.421695},
              {latitude: 37.764993, longitude: -122.421843},
              {latitude: 37.764986, longitude: -122.422255},
              {latitude: 37.764975, longitude: -122.422823},
              {latitude: 37.764939, longitude: -122.423411},
              {latitude: 37.764902, longitude: -122.424014},
              {latitude: 37.764853, longitude: -122.424576},
              {latitude: 37.764826, longitude: -122.424922},
              {latitude: 37.764796, longitude: -122.425375},
              {latitude: 37.764782, longitude: -122.425869},
              {latitude: 37.764768, longitude: -122.426089},
              {latitude: 37.764766, longitude: -122.426117},
              {latitude: 37.764723, longitude: -122.426276},
              {latitude: 37.764681, longitude: -122.426649},
              {latitude: 37.782012, longitude: -122.404200},
              {latitude: 37.781574, longitude: -122.404911},
              {latitude: 37.781055, longitude: -122.405597},
              {latitude: 37.780479, longitude: -122.406341},
              {latitude: 37.779996, longitude: -122.406939},
              {latitude: 37.779459, longitude: -122.407613},
              {latitude: 37.778953, longitude: -122.408228},
              {latitude: 37.778409, longitude: -122.408839},
              {latitude: 37.777842, longitude: -122.409501},
              {latitude: 37.777334, longitude: -122.410181},
              {latitude: 37.776809, longitude: -122.410836},
              {latitude: 37.776240, longitude: -122.411514},
              {latitude: 37.775725, longitude: -122.412145},
              {latitude: 37.775190, longitude: -122.412805},
              {latitude: 37.774672, longitude: -122.413464},
              {latitude: 37.774084, longitude: -122.414186},
              {latitude: 37.773533, longitude: -122.413636},
              {latitude: 37.773021, longitude: -122.413009},
              {latitude: 37.772501, longitude: -122.412371},
              {latitude: 37.771964, longitude: -122.411681},
              {latitude: 37.771479, longitude: -122.411078},
              {latitude: 37.770992, longitude: -122.410477},
              {latitude: 37.770467, longitude: -122.409801},
              {latitude: 37.770090, longitude: -122.408904},
              {latitude: 37.769657, longitude: -122.408103},
              {latitude: 37.769132, longitude: -122.407276},
              {latitude: 37.768564, longitude: -122.406469},
              {latitude: 37.767980, longitude: -122.405745},
              {latitude: 37.767380, longitude: -122.405299},
              {latitude: 37.766604, longitude: -122.405297},
              {latitude: 37.765838, longitude: -122.405200},
              {latitude: 37.765139, longitude: -122.405139},
              {latitude: 37.764457, longitude: -122.405094},
              {latitude: 37.763716, longitude: -122.405142},
              {latitude: 37.762932, longitude: -122.405398},
              {latitude: 37.762126, longitude: -122.405813},
              {latitude: 37.761344, longitude: -122.406215},
              {latitude: 37.760556, longitude: -122.406495},
              {latitude: 37.759732, longitude: -122.406484},
              {latitude: 37.758910, longitude: -122.406228},
              {latitude: 37.758182, longitude: -122.405695},
              {latitude: 37.757676, longitude: -122.405118},
              {latitude: 37.757039, longitude: -122.404346},
              {latitude: 37.756335, longitude: -122.403719},
              {latitude: 37.755503, longitude: -122.403406},
              {latitude: 37.754665, longitude: -122.403242},
              {latitude: 37.753837, longitude: -122.403172},
              {latitude: 37.752986, longitude: -122.403112},
              {latitude: 37.751266, longitude: -122.403355}
            ]}