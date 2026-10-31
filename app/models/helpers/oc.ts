import { generateLabel } from "@/app/functions/generateLabel";
import { generateId } from "@/app/functions/generateID";

export var OC_Title = "The O.C"
export var OC_ID = generateId(OC_Title);

// Lastnames
   export var Atwood_Name = "Atwood";
   export var Cohen_Name = "Cohen";
   export var Cooper_Name = "Cooper;"

// Characters 
    // Main
        // The Cohens
            // Ryan
                export var RyanAtwood_firstName = "Ryan";
                export var RyanAtwood_lastName = `${Atwood_Name}-Cohen`;
                export var RyanAtwood_fullName = generateLabel(RyanAtwood_firstName, RyanAtwood_lastName);
                export var RyanAtwood_ID = generateId(RyanAtwood_fullName!)
                

            // Seth
                export var SethCohen_firstName = "Seth";
                export var SethCohen_fullName = generateLabel(SethCohen_firstName, Cohen_Name);
                export var SethCohen_ID = generateId(SethCohen_fullName!);


            // Sandy
                export var SandyCohen_firstName = "Sandy";
                export var SandyCohen_fullName = generateLabel(SandyCohen_firstName, Cohen_Name);
                export var SandyCohen_ID = generateId(SandyCohen_fullName!);
           
            // Kirsten
                export var KirstenCohen_firstName = "Kirsten";
                export var KirstenCohen_fullName = generateLabel(KirstenCohen_firstName, Cohen_Name);
                export var KirstenCohen_ID = generateId(KirstenCohen_fullName!);

        // The Coopers
            // Marissa
                export var MarissaCooper_firstName = "Marissa";
                export var MarissaCooper_fullName = generateLabel(MarissaCooper_firstName, Cooper_Name);
                export var MarissaCooper_ID = generateId(MarissaCooper_fullName!);

            // Julie
               export var JulieCooper_firstName = "Julie";
               export var JulieCooper_fullName = generateLabel(JulieCooper_firstName, Cooper_Name);
               export var JulieCooper_ID = generateId(JulieCooper_fullName!);

            // Jimmy 

            // Kaitlin

        // Others
            // Summer
              export var SummerRoberts_firstName = "Summer";
              export var SummerRoberts_lastName = "Roberts";
              export var SummerRoberts_fullName = generateLabel(SummerRoberts_firstName, SummerRoberts_lastName);
              export var SummerRoberts_ID = generateId(SummerRoberts_fullName!)
    
            // Caleb
               export var CalebNichols_firstName = "Caleb";
               export var CalebNichols_lastName = "Nichols";
               export var CalebNichols_fullName = generateLabel(CalebNichols_firstName, CalebNichols_lastName);
               export var CalebNichols_ID = generateId(CalebNichols_fullName!);

            // Luke
                export var LukeWard_firstName = "Luke";
                export var LukeWard_lastName = "Ward";
                export var LukeWard_fullName = generateLabel(LukeWard_firstName, LukeWard_lastName);
                export var LukeWard_ID = generateId(LukeWard_fullName!)
    
            // Taylor 
                export var TaylorTownsend_firstName = "Taylor";
                export var TaylorTownsend_lastName = "Townsend";
                export var TaylorTownsend_fullName = generateLabel(TaylorTownsend_firstName, TaylorTownsend_lastName);
                export var TaylorTownsend_ID = generateId(TaylorTownsend_fullName!);
    
    //  Reacurring
        // Trey
           export var TreyAtwood_firstName = "Trey" 
           export var TreyAtwood_fullName = generateLabel(TreyAtwood_firstName, Atwood_Name);
           export var TreyAtwood_ID = generateId(TreyAtwood_fullName!)

        // Dawn
           export var DawnAtwood_firstName = "Dawn" 
           export var DawnAtwood_fullName = generateLabel(DawnAtwood_firstName, Atwood_Name);
           export var DawnAtwood_ID = generateId(DawnAtwood_fullName!)

        // Lindsey
           export var LindseyGardner_firstName = "Lindsey";
           export var LindseyGardner_lastName = "Gardner"
           export var LindseyGardner_fullName = generateLabel(LindseyGardner_firstName, LindseyGardner_lastName);
           export var LindseyGardner_ID = generateId(LindseyGardner_fullName!);
    
// Seasons
   // Season 1
      export var ocS1_ID = generateId(OC_Title + " Season 1");

   // Episode
        // Ep 1
           export var ocPilot_Title = "Premiere"
           export var ocPilot_ID = OC_ID + "-" + ocPilot_Title;
        
        // Ep 2
           export var ocS1Ep2_Title = "The Model Home";
           export var ocS1Ep2_ID = generateId(OC_Title + ocS1Ep2_Title)

        // Ep 3
           export var ocS1Ep3_Title = "The Gamble";
           export var ocS1Ep3_ID = generateId(OC_Title + ocS1Ep3_Title)

        // Ep 9
           export var ocS1Ep9_Title = "The Heights";
           export var ocS1Ep9_ID = generateId(OC_Title + ocS1Ep9_Title);

        // Ep 17
           export var ocS1Ep17_Title = "The Rivals";
           export var ocS1Ep17_ID = generateId(OC_Title + ocS1Ep17_Title);

        // Ep 20
           export var ocS1Ep20_Title = "The Rivals";
           export var ocS1Ep20_ID = generateId(OC_Title + ocS1Ep20_Title);

        // Ep 24
           export var ocS1Ep24_Title = "The Proposal";
           export var ocS1Ep24_ID = generateId(OC_Title + ocS1Ep24_Title);

        // Ep 27
           export var ocS1Ep27_Title = "The Ties That Bind";
           export var ocS1Ep27_ID = generateId(OC_Title + ocS1Ep27_Title);



    // "season" 2
       export var ocS2_ID = generateId(OC_Title + " Season 2");
       
       // Ep 1
          export var ocS2Ep1_Title = "The Distance";
          export var ocS2Ep1_ID = generateId(OC_Title + ocS2Ep1_Title)

       // Ep 4
         export var ocS2Ep4_Title = "The New Era"
         export var ocS2Ep4_ID = generateId(OC_Title + ocS2Ep4_Title)

        // Ep 14   
          export var ocS2Ep14_Title = "The Rainy Day Women";
          export var ocS2Ep14_ID = generateId(OC_Title + ocS2Ep14_Title)

        // Ep 18
          export var ocS2Ep18_Title = "The Risky Business"
          export var ocS2Ep18_ID = generateId(OC_Title + ocS2Ep18_Title)

        // Ep 20
          export var ocS2Ep20_Title = "The O.C Confidential";
          export var ocS2Ep20_ID = generateId(OC_Title + ocS2Ep20_Title);


    // season 3
       export var ocS3_ID = generateId(OC_Title + " Season 3");

       //Ep 8
          export var ocS3ep8_Title = "The Game Plan";
          export var ocS3ep8_ID = generateId(OC_Title + " " + ocS3ep8_Title)

       // Ep 16
          export var ocS3Ep16_Title = "The Road Warrior";
          export var ocS3Ep16_ID = generateId(OC_Title + ocS3Ep16_Title);

        // Ep 17
          export var ocS3Ep17_Title = "The Journey";
          export var ocS3Ep17_ID = generateId(OC_Title + ocS3Ep17_Title);

        // Ep 18
          export var ocS3Ep18_Title = "The Undertow";
          export var ocS3Ep18_ID = generateId(OC_Title + ocS3Ep18_Title);

        // Ep 20
          export var ocS3Ep20_Title = "The Day After Tomorrow";
          export var ocS3Ep20_ID = generateId(OC_Title + ocS3Ep20_Title);


       //Ep 25
          export var ocS3Finale_Title = "The Graduates";
          export var ocS3Finale_ID = generateId(OC_Title + " " + ocS3Finale_Title)

    // "season" 4
      export var ocS4_ID = generateId(OC_Title + " Season 4");
      
      //Episodes

        //Ep 5
           export var ocS4Ep5_Title = "The Sleeping Beauty";
           export var ocS4Ep5_ID = generateId(OC_Title + " " + ocS4Ep5_Title);

        // Ep 6
           export var ocS4Ep6_Title = "The Summer Bummer";
           export var ocS4Ep6_ID = generateId(OC_Title + " " + ocS4Ep6_Title);

        //Ep 15   
           export var ocS4Ep15_Title = "The Night Moves";
           export var ocS4Ep15_ID = generateId(OC_Title + " " + ocS4Ep15_Title);

        //Ep 16
           export var ocSeriesFinaleTitle = "The End's Not Near, It's Here"
           export var ocSeriesFinale_ID = generateId(OC_Title + " " + ocSeriesFinaleTitle);    