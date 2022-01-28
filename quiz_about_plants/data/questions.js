const questions = [
    {
        id: 1,
        picture: "images/kamilica.png",
        correctAnswer: "Камилица",
        explanation: "Камилица је једна од најљековитијих и најмириснија биљка, која има широку примјену у лијечењу разних обољења. " +
            "Посебно се показала учинковита код упала коже и слузокоже, " +
            "те има умирујући ефекат код нервозе и грчева. У љековите сврхе сакупљају се цвјетне " +
            "главице од којих се најчешће припрема чај."
    },
    {
        id: 2,
        picture: "images/kopriva1.png",
        correctAnswer: "Коприва",
        explanation: "Коприва или жара се сматра једном од најљековитијих биљака у нашим крајевима. " +
            "Стабљика и листови су прекривени длачицама пуним мравље киселине које жаре, истварају пликове на кожи. " +
            "Цијела биљка је љековита, а посебно се придаје значај за ефикасно подизање ниских вриједности жељеза у крви. "
    },
    {
        id: 3,
        picture: "images/neven.png",
        correctAnswer: "Невен",
        explanation: "Невен се узгаја као украсна и љековита биљка. Најчешће се употребљава у виду " +
            "„невенове масти“ за зарастање рана и других кожних обољења, а у виду чаја користи се за " +
            "лијечење желуца и цријева."
    },
    {
        id: 4,
        picture: "images/maslacak (2).png",
        correctAnswer: "Маслачак",
        explanation: "Маслачак је зељаста биљка са меснатим коријеном и издуженим неправилно урезаним " +
            "листовима, скупљени у приземну розету. Стабљика је шупља пуна млијечног сока, а на " +
            "врху се налази цвјетна главица жуте боје. Сви дијелови биљке су љековити, а листови се " +
            "користе и у исхрани у виду салате."

    },
    {
        id: 5,
        picture: "images/hmelj.png",
        correctAnswer: "Хмељ",
        explanation: "Хмељ садржи супстанце које имају умирујући и успављујући ефекат. Народно искуство " +
            "и научна испитивања показала су да је хмељ одлично средство против несанице, па се у " +
            "новије вријеме производе јастуци и душеци пуњени цвастима хмеља за бољи сан."
    },
    {
        id: 6,
        picture: "images/vodopija.png",
        correctAnswer: "Водопија",
        explanation: "Водопија има усправну угласту стабљику, док је коријен дебео и вретенаст. Доњи "+
        "листови су сужени у дршку, а горњи сједећи. Цвјетови су крупни, свијетло плаве боје. "+
        "Користи се за лијечење стомачних тегоба, за апетит. Некад се коријен пржио и користио "+
        "као замјена за кафу. "
    
    },
    {
        id: 7,
        picture: "images/istockphoto-612402456-170667a-removebg-preview.png",
        correctAnswer: "Бршљан",
        explanation: "Бршљан је дрвенаста пењачица која се пење уз усправну подлогу или друге биљке "+
        "помоћу ваздушног коријења. Због изванредних љековитих својстава, показао се као један "+ 
        "од основних састојака за лијечење кашља и других тегоба дисајног система."
  

    },
    {
        id: 8,
        picture: "images/crocus-one-first-spring-flowers-260nw-762940639-removebg-preview.png",
        correctAnswer: "Љубичица",
        explanation: "Код нас постоји више врста љубичица, са лијепим љубичастим цвјетовима. Али, "+ 
        "љековито дјеловање има само мирисна љубичица, па се остале врсте не сакупљају. Чај од "+
        "цвјетова љубичице је одлично средство против кашља."
        
    },
    {
        id: 9,
        picture: "images/istockphoto-1180142132-612x612-removebg-preview.png",
        correctAnswer: "Црвена дјетелина",
        explanation: "Црвена дјетелина има усправну, неразгранату стабљику на чијем врху се налазе црвени "+ 
        "цвјетови, скупљени у главицу. У народној медицини употребљава се против екцема и "+
        "других кожних обољења."
       
    },
    {
        id: 10,
        picture: "images/lipa.png",
        correctAnswer: "Липа",
        explanation: "Код нас разликујемо три врсте липа: ситнолисну, крупнолисну и сребрну липу. Осим "+
        "љековитих својстава, веома је омиљен народни чај због изузетног укуса и мириса."
       
    },
    {
        id: 11,
        picture: "images/nnana-removebg-preview1.png",
        correctAnswer: "Нана",
        explanation: "У природи расте неколико различитих врста нана и углавном све имају љековита "+
        "својства (питома, дуголисна, барска, кудрава нана итд). Нана је нашла добру примјену у "+
        "лијечењу желудачних и стомачних проблема."
        
       
    },
    {
        id: 12,
        picture: "images/mallow-flower-on-white-background-260nw-1712657380-removebg-preview.png",
        correctAnswer: "Црни сљез",
        explanation: "Црни сљез је љековита и јестива биљка из породице сљезова. Показао се као одлично "+ 
        "средство које поспјешује растварање и излучивање слузи код болести дисајних органа."
       
    },
    {
        id: 13,
        picture: "images/hajdu-removebg-preview.png",
        correctAnswer: "Хајдучка трава",
        explanation: "Угњечени листови хајдучке траве кад се привију на свјежу рану представљају једно од "+
        "најефикаснијих начина за заустављање краварења и зарастање рана. Чај од хајдучке траве "+
        "успјешно лијечи болести цријева и желуца, смањује надутост, отвара апетит итд."
       
    },
    {
        id: 14,
        picture: "images/w1-removebg-preview.png",
        correctAnswer: "Дивља ружа",
        explanation: "Шипак или дивља ружа је трновит и разгранат жбун са лијепим, ружичастим до бијелим "+ 
        "цвјетовима, врло пријатног мириса. Зрели плодови су наранџасто-црвени и богати "+
        "витамином C, чија се количина кухањем не смањује. Чај од шипка јача имунитет и чине да "+ 
        "човјеков организам постане отпорнији према болестима."
       
    },
    {
        id: 15,
        picture: "images/",
        correctAnswer: "Трава ива",
        explanation: "У нашим крајевима, трава ива је веома цијењена љековита биљка. За њу се каже „трава "+
        "ива од мртва прави жива“. Сматра се да окрепљујући чај од траве иве лијечи различита "+
        "обољења, нарочито болести органа за варење и дисање."
       
    },
    {
        id: 16,
        picture: "images/360_F_111593254_LPpRCYUEgoij4f4g0GQgj1ptGn12ZwYl-removebg-preview.png",
        correctAnswer: "Зова",
        explanation: "Зова расте као грм или мање дрво које красе ситни, бијели мирисни цвјетићи скупљени "+
        "у велику цваст на врховима грана. Чај од зове се показао као одлично средство против "+
        "прехладе и код презнојавања, а у виду облога примјењује се код отока."
    },
    {
        id: 17,
        picture: "images/image (8).png",
        correctAnswer: "Дивизма",
        explanation: "Дивизма расте као коров свуда око нас. Прве године образује велику розету крупних "+ 
        "листова, а друге године израста стабљика до 2 метра висине. Листови су вунасто длакави, "+ 
        "а жути цвјетови на врху стабљике скупљени су у дуги клас. Употребљава се против "+
        "бронхитиса, астме, против кашља, те болова у зглобовима."
    },
    {
        id: 18,
        picture: "images/Silver-birch-removebg-preview.png",
        correctAnswer: "Бреза",
        explanation: "Бреза је препознатљиво дрво по бијелој кори која се лако гули и одваја. Листови су "+
        "троугласти, по рубу зупчасти. Мушки цвјетови су висеће ресе, док женске стоје усправно. "+
        "Сок од брезе се сматра најбољим средством против пијеска и камена у бубрежој бешици, а "+
        "лист ефикасним биљним лијеком за лијечење мокраћних путева."
    },
    {
        id: 19,
        picture: "images/shepherds-purse-capsella-bursapastoris-isolated-260nw-1958118127-removebg-preview.png",
        correctAnswer: "Хоћу-нећу",
        explanation: "Хоћу-нећу или русомача је зељаста биљка са усправним стаблом. Листови розете су на "+ 
        "дршкама, док су листови стабла сједећи. Има ситне цвјетове скупљене у гроздове, а "+
        "плодови су срцасто трокутастог облика. Користи се за заустављање крварења."
    },
    {
        id: 20,
        picture: "images/image (9).png",
        correctAnswer: "Росопас",
        explanation: "Росопас је зељаста биљка која расте као коров. Кад се биљка озлиједи, из ње цури "+
        "наранџасти млијечни сок који је љутог и горког мириса и укуса. Због тога га животиње "+
        "избјегавају у исхрани. Пронашао је примјену у народној медицини за лијечење жутице, "+
        "грчева у стомаку, болести јетре итд."
    },
    {
        id: 21,
        picture: "images/zalf-removebg-preview.png",
        correctAnswer: "Жалфија",
        explanation: "Жалфија је код нас врло цијењена биљка. Некад су је у народу звали и света трава, због "+ 
        "изузетног љековитог својства. Средњовјековна медицинска школа у Салерму је толико "+ 
        "поштовала ову биљку да је о њој говорила: „Како може човјек умријети, који у врту свом "+ 
        "има жалфију?!“"
    },
    {
        id: 22,
        picture: "images/kantarion-removebg-preview.png",
        correctAnswer: "Кантарион",
        explanation: "Кантарион због своје љековитости има примјену од давнина. Има чврсту и разгранату "+ 
        "стабљику са малим листовима, прекривеним уљаним жлијездама попут тачкица. "+
        "Кантарион ублажава болове, дјелује опуштајуће на нерве, а кантарионово уље се користи "+
        "код опекотина на кожи, код крстобоље и против алергија."
    },
    {
        id: 23,
        picture: "images/bs-removebg-preview.png",
        correctAnswer: "Бијели сљез",
        explanation: "Бијели сљез је биљка која нарасте и до 2 метра у висину. Има разгранат и меснат "+
        "коријен, који је споља жут, а изнутра бијел. Повољно дјелује код кашља, бронхитиса, "+
        "астме и других обољења пробавних органа."
    },
    {
        id: 24,
        picture: "images
        /dobricica-removebg-preview1.png",
        correctAnswer: "Добричица",
        explanation: "За добричицу, Словени вјерују да може учинити човјека бољим! Због својих "+ 
        "љековитих састојака користи се за лијечење многих обољења, а посебно се примјењује код "+
        "болести дисајних органа."
    
    },
    {
        id: 25,
        picture: "images/",
        correctAnswer: "Шумска јагода",
        explanation: "Шумска јагода је опште позната и препознатљива шумска биљка, врло омиљена код "+ 
        "становништва. Чај од коријена шумске јагоде употребљава се за лијечење пролива, а чај "+ 
        "од листова користи се за прочишћавање крви."
    },
    {
        id: 26,
        picture: "images/majcinaD-removebg-preview.png",
        correctAnswer: "Мајчина душица",
        explanation: "Мајчина душица је мала бусенаста или пузава биљка, при дну одрвењена. Свијетло "+ 
        "ружичасти цвјетови скупљени су на врховима грана у цвасти, пријатног мириса. Чај од "+
        "мајчине душице је омиљени лијек у нашем народу."
    },
    {
        id: 27,
        picture: "images/zenskabokv.png",
        correctAnswer: "Женска боквица",
        explanation: "Женска боквица има широке листове, густо послагане у приземну розету из које избија "+ 
        "једна или више цвјетних стабљика. На врху стабљика налази се дуга класаста цваст. Када "+ 
        "се свјеж лист очисти и привије на посјекотину или неку другу рану на кожи, ефикасно "+ 
        "зауставља крварење."
    },
    {
        id: 28,
        picture: "images/gavez-removebg-preview (2).png",
        correctAnswer: "Гавез",
        explanation: "Маст од коријена гавеза може да се директно наноси на неочишћене ране на кожи, "+
        "спречавајући тровање. Показало се да и најдубље посјекотине зарастају без ожиљака. Због "+ 
        "своје изузетене љековитости, народ вјерује да би два прста срасла један за други, ако би "+ 
        "била увезана коријеном гавеза."
    },
    {
        id: 29,
        picture: "images/",
        correctAnswer: "Мушка боквица",
        explanation: "Постоји више различитих врста боквица и све имају слично љековито дејство. Мушка "+
        "боквица има уске листове скупљене у приземну розету из којих избија неколико "+ 
        "усправних ребрастих стабљика. На њиховим врховима се налазе смеђе главичасте или "+ 
        "цилиндричне цвасти. "
    },
    {
        id: 30,
        picture: "images/ss-removebg-preview.png",
        correctAnswer: "Јагорчевина",
        explanation: "Постоји више врста јагорчевина, али нису све једнако љековите. Најљековитијом се "+ 
        "сматра врста која има дуге стабљике до 20 цм на чијим врховима се налази више "+ 
        "тамножутих цвјетова. Чај од јагорчевине се препоручује код кашља, упале плућа, "+
        "тепоспјешује избацивања слузи, ублажава главобоље."
    }
];

export default questions