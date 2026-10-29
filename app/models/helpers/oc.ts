import { pilotLabel } from "../objects/dramaSeries";

export var OC_ID = "the-o.c";

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
                export var RyanAtwood_fullName = RyanAtwood_firstName + " " + RyanAtwood_lastName
                export var RyanAtwood_ID = (RyanAtwood_firstName + "-" + RyanAtwood_lastName).toLowerCase()

            // Seth
                export var SethCohen_firstName = "Seth";
                export var SethCohen_fullName = SethCohen_firstName + " " + Cohen_Name;
                export var SethCohen_ID = (SethCohen_firstName + "-" + Cohen_Name).toLowerCase();


            // Sandy
                export var SandyCohen_firstName = "Sandy";
                export var SandyCohen_fullName = SandyCohen_firstName + " " + Cohen_Name;
                export var SandyCohen_ID = (SandyCohen_firstName + "-" + Cohen_Name).toLowerCase();
           
            // Kirsten
                export var KirstenCohen_firstName = "Kirsten";
                export var KirstenCohen_fullName = KirstenCohen_firstName + " " + Cohen_Name;
                export var KirstenCohen_ID = (KirstenCohen_firstName + "-" + Cohen_Name).toLowerCase();

        // The Coopers
            // Marissa
                export var MarissaCooper_firstName = "Marissa";
                export var MarissaCooper_fullName = MarissaCooper_firstName + " " + Cooper_Name;
                export var MarissaCooper_ID = MarissaCooper_fullName.toLowerCase().split(" ").join("-");

            // Julie
               export var JulieCooper_firstName = "Julie";
               export var JulieCooper_fullName = JulieCooper_firstName + " " + Cooper_Name;
               export var JulieCooper_ID = JulieCooper_fullName.toLowerCase().split(" ").join("-");

            // Jimmy 

            // Kaitlin

        // Others
            // Summer
              export var SummerRoberts_firstName = "Summer";
              export var SummerRoberts_lastName = "Roberts";
              export var SummerRoberts_fullName = SummerRoberts_firstName + " " + SummerRoberts_lastName;
              export var SummerRoberts_ID = (SummerRoberts_firstName + "-" + SummerRoberts_lastName).toLowerCase();

            // Caleb

            // Luke
                export var LukeWard_firstName = "Luke";
                export var LukeWard_lastName = "Ward";
                export var LukeWard_fullName = LukeWard_firstName + " " + LukeWard_lastName
                export var LukeWard_ID = (LukeWard_firstName + "-" + LukeWard_lastName).toLowerCase()

            // Taylor 
                export var TaylorTownsend_firstName = "Taylor";
                export var TaylorTownsend_lastName = "Townsend";
                export var TaylorTownsend_fullName = TaylorTownsend_firstName + " " + TaylorTownsend_lastName;
                export var TaylorTownsend_ID = (TaylorTownsend_firstName + "-" + TaylorTownsend_lastName).toLowerCase();

    //  Reacurring
        // Trey
           export var TreyAtwood_firstName = "Trey" 
           export var TreyAtwood_fullName = TreyAtwood_firstName + " " + Atwood_Name;
           export var TreyAtwood_ID = (TreyAtwood_firstName + "-" + Atwood_Name).toLowerCase();

// "season"s
   // "season" 1
   export var ocS1_ID = (OC_ID + "-" + "season" + "-1");

   // Episode
    
        // Ep 1
        export var ocPilot_ID = OC_ID + "-" + pilotLabel;
        // Ep 2
        export var ocS1Ep2 = "The Model Home";
        export var ocS1Ep2_ID = ocS1Ep2.split(" ").join("-").toLowerCase();

    // "season" 2
    export var ocS2_ID = (OC_ID + "-" + "season" + "-2");
       
       // Ep 1
       export var ocS2Ep1_Title = "The Distance";
       export var ocS2Ep1_ID = ocS2Ep1_Title.toLowerCase().split(" ").join("-") + "-episode";

    // "season" 3
   export var ocS3_ID = (OC_ID + "-" + "season" + "-3");
   
       //Ep 8
       export var ocS3ep8_Title = "The Game Plan";
       export var ocS3ep8_ID = ocS3ep8_Title.toLowerCase().split(" ").join("-");

    // "season" 4
   export var ocS4_ID = (OC_ID + "-" + "season" + "-4");

      //Episodes

      //Ep 12
      export var ocSeriesFinale_ID = OC_ID + "-" + "season-4-episode-12"   
      export var ocSeriesFinaleTitle = "The End's Not Near, It's Here";    