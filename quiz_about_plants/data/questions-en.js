const questions = [
    {
        id: 1,
        picture: "images/kamilica.jpg",
        correctAnswer: "Chamomile",
        explanation: "Chamomile is one of the most medicinal and fragrant plants, which has wide application in "+
        "the treatment of various diseases. It has been particularly effective in inflammation of the skin "+
        "and mucous membranes, and has a calming effect when it comes to nervousness and cramps. "+
        "Flower heads are collected for medicinal purposes, from which tea is most often prepared."
    },
    {
        id: 2,
        picture: "images/kopriva.jpg",
        correctAnswer: "Nettle",
        explanation: "Nettle is considered one of the most medicinal plants in our region. The stem and leaves are "+
        "covered with hairs full of formic acid that sting, and create blisters on the skin. The whole plant "+
        "is medicinal, and special importance is attached to the effective raising of low levels of iron in "+
        "the blood."
    },
    {
        id: 3,
        picture: "images/neven.jpg",
        correctAnswer: "Marigold",
        explanation: "Marigold is grown as an ornamental and medicinal plant. It is most often used in the form of "+
        "\"marigold ointment\" for healing wounds and other skin diseases, and in the form of tea it is used "+
        "to treat the stomach and intestines."
    },
    {
        id: 4,
        picture: "images/maslacak.jpg",
        correctAnswer: "Dandelion",
        explanation: "Dandelion is a herbaceous plant with a fleshy root and elongated irregularly incised leaves, "+
        "gathered in a ground rosette. The stem is hollow full of milky sap, and at the top is a yellow "+
        "flower head. All parts of the plant are medicinal, and the leaves are also used in the diet in the "+
        "form of salad."

    },
    {
        id: 5,
        picture: "images/hmelj.jpg",
        correctAnswer: "Common hop",
        explanation: "Common hop contains substances that have a calming and soothing effect. Folk experience "+
        "and scientific research have shown that common hop is an excellent remedy against insomnia, so "+
        "in recent times, pillows and mattresses filled with common hop inflorescences are being "+
        "produced for better sleep."
    },
    {
        id: 6,
        picture: "images/vodopija.jpg",
        correctAnswer: "Common chicory",
        explanation: "Common chicory has an upright angular stem, while the root is thick and spindle-shaped. The "+
        "lower leaves are narrowed into a stalk, and the upper are sessile. The flowers are large, light "+
        "blue. It is used to treat stomach problems, for appetite. Once upon a time, the root was roasted "+
        "and used as a coffee substitute."
    
    },
    {
        id: 7,
        picture: "images/brsljen.jpg",
        correctAnswer: "Ivy",
        explanation: "Ivy is a woody, climbing plant that climbs up suitable surfaces or other plants using aerial "+
        "roots. Due to its exceptional medicinal properties, it has proven to be one of the basic ingredients "+
        "for the treatment of cough and other respiratory problems."
  

    },
    {
        id: 8,
        picture: "images/ljubicica.jpg",
        correctAnswer: "Violets",
        explanation: "There are several types of violets in our country, with beautiful purple flowers. However, "+
        "only fragrant violet has a medicinal effect, so other species are not collected. Violet flower tea is "+
        "an excellent cough medicine."
        
    },
    {
        id: 9,
        picture: "images/crvena_djetalina.jpg",
        correctAnswer: "Red clover",
        explanation: "The red clover has an upright, unbranched stem topped with red flowers, gathered in a head. "+
        "In folk medicine, it is used against eczema and other skin diseases."
       
    },
    {
        id: 10,
        picture: "images/lipa.jpg",
        correctAnswer: "Linden",
        explanation: "We distinguish three types of linden: small-leaved, large-leaved and silver linden. In addition "+
        "to its medicinal properties, it is a very popular folk tea due to its exceptional taste and aroma."
       
    },
    {
        id: 11,
        picture: "images/nana.jpg",
        correctAnswer: "Mint",
        explanation: "Several different types of mint grow in nature and mostly all of them have medicinal "+
        "properties (peppermint, horse mint, pennyroyal, spearmint, etc.). Mint has been found beneficial "+
        "when applied in the treatment of stomach and abdominal problems."
        
       
    },
    {
        id: 12,
        picture: "images/crni_sljez.jpg",
        correctAnswer: "Common mallow",
        explanation: "Common mallow is a medicinal and edible plant in the Malvaceae family. It has been shown "+
        "to be an excellent agent that promotes the dissolution and secretion of mucus in diseases of the "+
        "respiratory organs."
       
    },
    {
        id: 13,
        picture: "images/hajducka_trava.jpg",
        correctAnswer: "Yarrow",
        explanation: "Crushed leaves of yarrow when applied to a fresh wound make one of the most effective ways "+
        "to stop bleeding and promote wound healing. Yarrow tea successfully cures intestinal and "+
        "stomach diseases, reduces bloating, increases appetite, etc.."
       
    },
    {
        id: 14,
        picture: "images/divlja_ruza.jpg",
        correctAnswer: "Rose haw",
        explanation: "Rose hip or rose haw is a thorny and branched shrub with beautiful, pink to white flowers, "+
        "with a very pleasant scent. Ripe fruits are orange to red and rich in vitamin C, the amount of "+
        "which is not reduced by cooking. Rosehip tea strengthens the immune system and makes the "+
        "human body more resistant to disease."
       
    },
    {
        id: 15,
        picture: "images/iva.jpg",
        correctAnswer: "Mountain germander",
        explanation: "In our region, the mountain germander is a highly valued medicinal plant. There is a saying "+
        "stating that \"the mountain germander brings you back to life\" The invigorating mountain "+
        "germander tea is believed to cure various ailments, especially diseases of the digestive and "+
        "respiratory organs."
       
    },
    {
        id: 16,
        picture: "images/360_F_111593254_LPpRCYUEgoij4f4g0GQgj1ptGn12ZwYl-removebg-preview.png",
        correctAnswer: "Elderberry",
        explanation: "The elderberry grows as a shrub or smaller tree adorned with tiny, white fragrant flowers "+
        "gathered in a large inflorescence at the tops of the branches. Elderberry tea has been shown to be "+
        "an excellent remedy for colds and sweating, and in the form of a poultice it is used for swelling."
    },
    {
        id: 17,
        picture: "images/image (8).png",
        correctAnswer: "Mullein",
        explanation: "Mullein grows like a weed all around us. In the first year, it forms a large rosette of large "+
        "leaves, and in the second year, the stem grows up to 2 meters in height. The leaves are woolly "+
        "and hairy, and the yellow flowers at the top of the stem are gathered in a long spike. It is used "+
        "against bronchitis, asthma, cough, and joint pain."
    },
    {
        id: 18,
        picture: "images/Silver-birch-removebg-preview.png",
        correctAnswer: "Birch",
        explanation: "Birch is a recognizable tree by its white bark that peels and separates easily. The leaves are "+
        "triangular, serrated along the edge. The male flowers are hanging tassels, while the female ones "+
        "stand upright. Birch sap is considered the best remedy against sand and stones in the renal "+
        "bladder, and the leaf an effective herbal remedy for the treatment of the urinary tract."
    },
    {
        id: 19,
        picture: "images/shepherds-purse-capsella-bursapastoris-isolated-260nw-1958118127-removebg-preview.png",
        correctAnswer: "Shepherd's purse",
        explanation: "Shepherd's purse is a herbaceous plant with an upright tree. The leaves of the rosette are on "+
        "the stalks, while the leaves of the stalk are sessile. It has tiny clustered flowers, and the fruits are "+
        "heart-shaped and triangular. It is used to stop bleeding."
    },
    {
        id: 20,
        picture: "images/image (9).png",
        correctAnswer: "Greater celandine",
        explanation: "The greater celandine is a herbaceous plant that grows like a weed. When the plant is injured, "+
        "orange milk sap leaks from it, which has a spicy and bitter smell and taste. That is why animals "+
        "avoid it in their diet. It has found application in folk medicine for the treatment of jaundice, "+
        "stomach cramps, liver diseases, etc."
    },
    {
        id: 21,
        picture: "images/zalf-removebg-preview.png",
        correctAnswer: "Sage",
        explanation: "Sage is a highly valued plant in our country. It was once popularly called sacred grass, due to "+
        "its exceptional medicinal properties. The medieval medical school in Salermo had so much "+
        "respect for this plant that it used to be said: \"How can a man who has sage in his garden die?!\" "
    },
    {
        id: 22,
        picture: "images/kantarion-removebg-preview.png",
        correctAnswer: "St. John's wort",
        explanation: "St. John's wort has been used since ancient times due to its medicinal properties. It has a firm "+
        "and branched stem with small leaves, covered with oily glands like dots. St. John&#39;s wort relieves "+
        "pain, has a relaxing effect on the nerves, and St. John's wort oil is used for skin burns, back pain "+
        "and allergies."
    },
    {
        id: 23,
        picture: "images/bs-removebg-preview.png",
        correctAnswer: "Marsh mallow",
        explanation: "Marsh mallow is a plant that grows up to 2 meters in height. It has a branched and fleshy "+
        "root, which is yellow on the outside and white on the inside. It has a beneficial effect on cough, "+
        "bronchitis, asthma and other digestive diseases."
    },
    {
        id: 24,
        picture: "images/dobricica-removebg-preview1.png",
        correctAnswer: "Ground-ivy",
        explanation: "For ground-ivy, the Slavs believe it can make a man better! Due to its medicinal ingredients, "+
        "it is used to treat many diseases, and is especially used in diseases of the respiratory organs."
    
    },
    {
        id: 25,
        picture: "images/wildst-removebg-preview.png",
        correctAnswer: "Wild strawberry",
        explanation: "The wild strawberry is a well-known and recognizable forest plant, very popular among the "+
        "population. Wild strawberry root tea is used to treat diarrhea, and leaf tea is used to purify the "+
        "blood."
    },
    {
        id: 26,
        picture: "images/majcinaD-removebg-preview.png",
        correctAnswer: "Thyme",
        explanation: "Thyme is a small bushy or creeping plant, woody at the bottom. The bright pink flowers are "+
        "gathered on the tops of the branches in an inflorescence, with a pleasant scent. Thyme tea is a "+
        "favorite medicine among our people."
    },
    {
        id: 27,
        picture: "images/zenskabokv.png",
        correctAnswer: "Female plantago",
        explanation: "The female plantago has broad leaves, densely arranged in a ground rosette from which one "+
        "or more flower stalks emerge. At the top of the stalks there is a long spiked inflorescence. When "+
        "a fresh leaf is cleaned and applied to a cut or other wound on the skin, it effectively stops "+
        "bleeding."
    },
    {
        id: 28,
        picture: "images/gavez-removebg-preview (2).png",
        correctAnswer: "Comfrey",
        explanation: "Comfrey root ointment can be applied directly to uncleaned wounds on the skin, preventing "+
        "poisoning. Even the deepest cuts have been shown to heal without scarring. Due to its "+
        "exceptional medicinal properties, people believe that two fingers would grow together if tied "+
        "using comfrey root."
    },
    {
        id: 29,
        picture: "images/malee-removebg-preview.png",
        correctAnswer: "Male plantago",
        explanation: "There are several different types of plantago and they all have a similar medicinal effect. The "+
        "male plantago has narrow leaves gathered in a ground rosette from which several erect ribbed "+
        "stems emerge. On their tops are brown glabrous or cylindrical inflorescences."
    },
    {
        id: 30,
        picture: "images/ss-removebg-preview.png",
        correctAnswer: "Primrose",
        explanation: "There are several types of primrose that are not all equally medicinal. The most medicinal is "+
        "considered to be a species that has stems up to 20 cm long, on the tops of which there are several "+
        "dark yellow flowers. Primrose tea is recommended for cough, pneumonia, promotes the "+
        "expulsion of mucus, relieves headaches."
    }
];

export default questions