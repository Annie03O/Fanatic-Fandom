import { generateLabel } from "@/app/functions/generateLabel";
import { generateId } from "@/app/functions/generateID";
import { Anna_Name, Caleb_Name, James_Name, Julie_Name, Luke_Name, Seth_Name, Taylor_Name } from "../commonPeople";
import { generateShipLabel } from "@/app/functions/generateShipLabel";

export var OC_Title = "The O.C"
export var OC_ID = generateId(OC_Title);

// Lastnames
   export var Atwood_Name = "Atwood";
   export var Cohen_Name = "Cohen";
   export var Cooper_Name = "Cooper";

// Characters 
    // Main
        // The Cohens
            // Ryan
                export var RyanAtwood_firstName = "Ryan";
                export var RyanAtwood_lastName = `${Atwood_Name}-Cohen`;
                export var RyanAtwood_fullName = generateLabel(RyanAtwood_firstName, RyanAtwood_lastName);
                export var RyanAtwood_ID = generateId(RyanAtwood_fullName!)
                

            // Seth
                export var SethCohen_fullName = generateLabel(Seth_Name, Cohen_Name);
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
               export var JulieCooper_fullName = generateLabel(Julie_Name, Cooper_Name);
               export var JulieCooper_ID = generateId(JulieCooper_fullName!);

            // Jimmy 
               export var JimmyCooper_fullName = generateLabel(James_Name, Cooper_Name);
               export var JimmyCooper_label = generateLabel("Jimmy", Cooper_Name);
               export var JimmyCooper_ID = generateId(`Jimmy ${Cooper_Name}`);

            // Kaitlin
               export var KaitlinCooper_firstName = "Kaitlin";
               export var KaitlinCooper_fullName = generateLabel(KaitlinCooper_firstName, Cooper_Name);
               export var KaitlinCooper_ID = generateId(KaitlinCooper_fullName!);

        // Others
            // Summer
              export var SummerRoberts_firstName = "Summer";
              export var SummerRoberts_lastName = "Roberts";
              export var SummerRoberts_fullName = generateLabel(SummerRoberts_firstName, SummerRoberts_lastName);
              export var SummerRoberts_ID = generateId(SummerRoberts_fullName!)
    
            // Caleb
               export var CalebNichols_lastName = "Nichols";
               export var CalebNichols_fullName = generateLabel(Caleb_Name, CalebNichols_lastName);
               export var CalebNichols_ID = generateId(CalebNichols_fullName!);

            // Luke
                export var LukeWard_lastName = "Ward";
                export var LukeWard_fullName = generateLabel(Luke_Name, LukeWard_lastName);
                export var LukeWard_ID = generateId(LukeWard_fullName!)
    
            // Taylor 
                export var TaylorTownsend_lastName = "Townsend";
                export var TaylorTownsend_fullName = generateLabel(Taylor_Name, TaylorTownsend_lastName);
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

         // Anna
            export var AnnaStern_lastName = "Stern";
            export var AnnaStern_fullName = generateLabel(Anna_Name, AnnaStern_lastName);
            export var AnnaStern_ID = generateId(AnnaStern_fullName!);

         // Oliver
            export var OliverTrask_firstName = "Oliver";
            export var OliverTrask_lastName = "Trask";
            export var OliverTrask_fullName =  generateLabel(OliverTrask_firstName, OliverTrask_lastName);
            export var OliverTrask_ID = generateId(OliverTrask_fullName!)

        // Lindsey
           export var LindseyGardner_firstName = "Lindsey";
           export var LindseyGardner_lastName = "Gardner"
           export var LindseyGardner_fullName = generateLabel(LindseyGardner_firstName, LindseyGardner_lastName);
           export var LindseyGardner_ID = generateId(LindseyGardner_fullName!);
// Relationships
   // Family
         // The Cohens
            export var RyanSandy_Label = generateShipLabel(RyanAtwood_firstName, SandyCohen_firstName)
            export var RyanSandy_ID = generateId(RyanSandy_Label!);   

            export var RyanKirsten_Label = generateShipLabel(RyanAtwood_firstName, KirstenCohen_firstName);
            export var RyanKirsten_ID = generateId(RyanKirsten_Label!)

            export var RyanSeth_Label = generateShipLabel(RyanAtwood_firstName, Seth_Name);
            export var RyanSeth_ID = generateId(RyanSeth_Label!);

            export var SethSandy_Label = generateShipLabel(Seth_Name, SandyCohen_firstName)
            export var SethSandy_ID = generateId(SethSandy_Label!);   

            export var SethKirsten_Label = generateShipLabel(Seth_Name, KirstenCohen_firstName);
            export var SethKirsten_ID = generateId(SethKirsten_Label!)

            export var RyanSummer_Label = generateShipLabel(RyanAtwood_firstName, SummerRoberts_firstName);
            export var RyanSummer_ID = generateId(RyanSummer_Label!)



         // The Atwoods
            export var RyanDawn_Label = generateShipLabel(RyanAtwood_firstName, DawnAtwood_firstName);
            export var RyanDawn_ID = generateId(RyanDawn_Label!)

            export var RyanTrey_Label = generateShipLabel(RyanAtwood_firstName, TreyAtwood_firstName);
            export var RyanTrey_ID = generateId(RyanTrey_Label!)
            

   // Romances
      export var RyanMarissa_Label = generateShipLabel(RyanAtwood_firstName, MarissaCooper_firstName);
      export var RyanMarissa_ID = generateId(RyanMarissa_Label!)

      export var RyanTaylor_Label = generateShipLabel(RyanAtwood_firstName, Taylor_Name);
      export var RyanTaylor_ID = generateId(RyanTaylor_Label!)

      export var RyanTheresa_Label = generateShipLabel(RyanAtwood_firstName, "Theresa");
      export var RyanTheresa_ID = generateId(RyanTheresa_Label!)

      export var RyanSadie_Label = generateShipLabel(RyanAtwood_firstName, "Sadie");
      export var RyanSadie_ID = generateId(RyanSadie_Label!)

      export var RyanLindsey_Label = generateShipLabel(RyanAtwood_firstName, "Lindsey");
      export var RyanLindsey_ID = generateId(RyanLindsey_Label!)

      export var MarissaLuke_Label = generateShipLabel(MarissaCooper_firstName, Luke_Name);
      export var MarissaLuke_ID = generateId(MarissaLuke_Label!)

      export var SandyKirsten_Label = generateShipLabel(SandyCohen_firstName, KirstenCohen_firstName);
      export var SandyKirsten_ID = generateId(SandyKirsten_Label!);

      export var SethSummer_Label = generateShipLabel(Seth_Name, SummerRoberts_firstName);
      export var SethSummer_ID = generateId(SethSummer_Label!);

      export var SethAnna_Label = generateShipLabel(Seth_Name, Anna_Name);
      export var SethAnna_ID = generateId(SethAnna_Label!);

      export var JulieCaleb_Label = generateLabel(Caleb_Name, Julie_Name);
      export var JulieCaleb_ID = generateId(JulieCaleb_Label!);



// Crew 

   // Directors
      export var DougLiman_Name = "Doug Liman";
      export var IanToynton_Name = "Ian Toynton"
      export var MichaelLange_Name = "Michael Lange"
      export var SanfordBookstaver_Name = "Sanford Bookstaver";
      export var PatrickNorris_Name = "Patrick Norris";

   // Writers 
      export var AllanHeinberg_Name = "Allan Heinberg"
      export var JaneEspenson_Name = "Jane Espenson"
      export var StephanieSavage_Name = "Stephanie Savage"

      
      
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

        // Ep 12
           export var ocS1Ep12_Title = "The Secret";
           export var ocS1Ep12_ID =  generateId(OC_Title + ocS1Ep12_Title);


         // Ep 15
           export var ocS1Ep15_Title = "The Third Wheel";
           export var ocS1Ep15_ID =  generateId(OC_Title + ocS1Ep15_Title);

        // Ep 17
           export var ocS1Ep17_Title = "The Rivals";
           export var ocS1Ep17_ID = generateId(OC_Title + ocS1Ep17_Title);

         // Ep 18
           export var ocS1Ep18_Title = "The Truth";
           export var ocS1Ep18_ID =  generateId(OC_Title + ocS1Ep18_Title);

        // Ep 20
           export var ocS1Ep20_Title = "The Telenovela";
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
           export var ocSeriesFinale_Title = "The End's Not Near, It's Here"
           export var ocSeriesFinale_ID = generateId(OC_Title + " " + ocSeriesFinale_Title);    