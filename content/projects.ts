export const projects = [
    {
      title: "Frest (WIP)",
      slug: "frest",
      description: "Trapped in a new world, Riley must save the oppressed Cates from the tyrannical rule of 3 World Lords with their guide, Ben the Frog. Experience new mechanics, explore a new world, and tackle dangerous enemies in Frest.",
      image: "/frest.jpg",
      tags: ["Unity", "C#", "3D Modeling", "AI", "Multiplayer"],
      timeline: [
        { date: "January 2023", title: "Concept Development", description: "Brainstormed game ideas and settled on the space strategy concept. Created initial design documents and gameplay mockups." },
        { date: "March 2023", title: "Prototyping", description: "Developed a basic prototype in Unity to test core gameplay mechanics. Implemented basic resource management and ship movement systems." },
        { date: "May 2023", title: "Art Style Development", description: "Defined the game's visual style. Created concept art for ships, planets, and UI elements. Began work on 3D models for key game assets." },
      ],
      supporting: [
        {
          title: "Overall Cotributions",
          description: "I am one of two gameplay programmers and focus primarily on player and level mechanics. Adding a new player ability, movement mode, or puzzles and dynamic platforms is my domain. I rely heavily on rapid prototyping and iteration, working closely with designers to ensure it doesn’t just work, but is fun and matches designer intentions.",
          video: null,
          image: null,
        },
        {
          title: "Player Controller Rework",
          description: "Halfway through production, our player controller wasn’t organized. States were defined only by booleans, making it difficult to the player controller because we need to read each if-statement.I decided to refactor the controller to follow an enum state machine, to make debugging easier and clearly define states, while allowing non-programmers to be able to understand what they’re editing.",
          video: "https://www.youtube.com/embed/ENSqY8ZcP7E?si=nf8KaQ6HDXldX_Ua",
          image: null,
        },
        {
          title: "Rapid Prototyping",
          description: "This is my first long-term project, and given a larger scope I also had to scope up the level of polish. To ensure functionality and fun, prototypes were first made and then peer evaluated to find bugs and to improve game feel.",
          video: null,
          image: null,
        },
      ]

    },
    {
      title: "Shrimp Fried Rice",
      slug: "shrimp-fried-rice",
      description: "Prove cannibalism isn’t so bad after all by cooking your siblings to create fabulous delicacies! Break the limit and set high scores, and unlock new cosmetics in Shrimp Fried Rice!",
      image: "/shrimp.jpg",
      tags: [
        "Unity",
        "Mobile Development",
        "C#",
        "UI/UX Design",
        "Touch Controls",
        "Gyroscope Implementation",
        "3D Modeling",
        "SFX"
       ],
      timeline: [
        { date: "January 2023", title: "Concept Development", description: "Brainstormed game ideas and settled on the space strategy concept. Created initial design documents and gameplay mockups." },
        { date: "March 2023", title: "Prototyping", description: "Developed a basic prototype in Unity to test core gameplay mechanics. Implemented basic resource management and ship movement systems." },
        { date: "May 2023", title: "Art Style Development", description: "Defined the game's visual style. Created concept art for ships, planets, and UI elements. Began work on 3D models for key game assets." },
      ],
      supporting: [
        {
          title: "Controlling the wok.",
          description: "To be accessible to as many people as possible, we decided to employ two control schemes for mobile: Touch and Gyro. To make the code easier to iterate on, I created two functions which “conditioned” the input data to be normal between Touch and Gyro, allowing me to analyze them both using the same functions. This made it far easier to iterate on the Wok controls at a deeper level, as we could tweak in the Gyro and Touch sense, and tweak the analysis without them relying on each other.",
          video: "https://www.youtube.com/embed/VHnf1vHW0rk?si=4TBo4JOG5N60PhNj",
          image: null,
        },
        {
          title: "Focus on using events in code.",
          description: " A good portion of code employs the observer pattern, waiting for outward data to come from watched scripts. A key one is our Fire System, which On Overlap sends out an event. Listening is our Heat Manager, the game’s status manager, and the Wok Texture Manager, which modulated the heat according the amount of heat incoming. Another was our SFX Manager, which keyed into important game events to know when to play certain SFX.",
          video: null,
          image: "/shrimp_code.PNG",
        },
      ]
    },
    {
      title: "Robo-Venture",
      slug: "robo-venture",
      description: "Robo-Venture is a platformer action game where you follow Robo, a sentient robot who's stranded on an alien planet. Missing the 4 fuel cells to relaunch his rocket, take control of Robo to escape the wasteland! And on your journey, discover the history of your enemies and the world.",
      image: "/robo.png",
      tags: ["Unreal Engine", "C++", "VR Development", "3D Modeling", "Level Design"],
      timeline: [
        { date: "January 2023", title: "Concept Development", description: "Brainstormed game ideas and settled on the space strategy concept. Created initial design documents and gameplay mockups." },
        { date: "March 2023", title: "Prototyping", description: "Developed a basic prototype in Unity to test core gameplay mechanics. Implemented basic resource management and ship movement systems." },
        { date: "May 2023", title: "Art Style Development", description: "Defined the game's visual style. Created concept art for ships, planets, and UI elements. Began work on 3D models for key game assets." },
        { date: "July 2023", title: "Core Systems Implementation", description: "Implemented the main game systems including research trees, ship combat, and planet colonization. Developed custom shaders for space effects." },
        { date: "September 2023", title: "AI and Multiplayer", description: "Created AI for enemy factions. Implemented multiplayer functionality using Unity's networking system." },
        { date: "November 2023", title: "Polish and Testing", description: "Conducted extensive playtesting. Refined game balance, fixed bugs, and optimized performance across different devices." },
        { date: "December 2023", title: "Launch", description: "Successfully launched Cosmic Crusade on PC and console platforms. Began work on post-launch content updates." },
      ],
      supporting: [
        {
          title: "Gameplay Programming.",
          description: "Abilities descend from the same class with basic features covering UI event broadcasting, input and animation abstract functions, and cool downs. Each ability sub-class overwrite abstract functions to have individualized actions while retaining the same system logic. The special abilities included were: Dash, Hookshot, Charge Punch. The generic abilities were: Jump, 3-Punch Combo. I also created Enemy AI that is responsive to the player entering certain areas and acts as a swarm. Swarms are activate when the player enters the Green Radius, the combat trigger. The blue is the area for passive roaming and is assigned per enemy.",
          video: null,
          image: "/robo_support.PNG",
        },
        {
          title: "UI design.",
          description: "The Abilities UI was designed to be a Slot System, where the slots would populate as new abilities were used, and was made using a Stack container and 4 locations on the HUD for it to show up on. The Player’s Health Bar decrements in discrete chunks, both for readability and aesthetic purposes as it mimics the looks of a battery. I also implemented menus for: Pausing, Options, Credits, and Start.",
          video: null,
          image: "/robo_ui.PNG",
        },
        {
          title: "Organization in Unity.",
          description: "As Lead Programmer, I was in-engine the most and was responsible for organizing folders and scripts to make it designer friendly. I made use of Unity Attributes to organize the Inspector into sections with headers, and adding tooltips on different variables.",
          video: null,
          image: "/robo_unity.jpg",
        },
        {
          title: "Task Management.",
          description: "Created and maintained task list for the team, adding in details and references. I also actively followed up with each person to check progress and deliver feedback.",
          video: null,
          image: "/robo_task.jpg",
        },
      ]
    }
  ]