import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [
    {
      id: 1,
      name: "Backend",
      price: 350000,
      image: "c1.webp",
      overview:
        "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one. Take-Away Skills: You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.!",
      learnlist: [
        "JavaScript from scratch - beginner to advance",
        "All about variable, functions, array, objects",
        "Object Oriented Programming",
        "Project-driven learning with plenty of example",
      ],
      instructoId: 1,
      duration: 6,
    },
    {
      id: 2,
      name: "Frontend",
      price: 350000,
      image: "c2.webp",
      overview:
        "JavaScript \n is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one. Take-Away Skills: You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.!",
      learnlist: [
        "JavaScript from scratch - beginner to advance",
        "All about variable, functions, array, objects",
        "Object Oriented Programming",
        "Project-driven learning with plenty of example",
      ],
      instructoId: 2,
      duration: 6,
    },
    {
      id: 3,
      name: "Computer Foundation",
      price: 350000,
      image: "c3.webp",
      overview:
        "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one. Take-Away Skills: You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.!",
      learnlist: [
        "JavaScript from scratch - beginner to advance",
        "All about variable, functions, array, objects",
        "Object Oriented Programming",
        "Project-driven learning with plenty of example",
      ],
      instructoId: 3,
      duration: 2,
    },
    {
      id: 4,
      name: "UX/UI design",
      price: 350000,
      image: "c4.webp",
      overview:
        "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one. Take-Away Skills: You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.!",
      learnlist: [
        "JavaScript from scratch - beginner to advance",
        "All about variable, functions, array, objects",
        "Object Oriented Programming",
        "Project-driven learning with plenty of example",
      ],
      instructoId: 4,
      duration: 6,
    },
    {
      id: 5,
      name: "Graphic design",
      price: 350000,
      image: "c5.webp",
      overview:
        "JavaScript is among the most powerful and flexible programming languages of the web. It powers the dynamic behavior on most websites, including this one. Take-Away Skills: You will learn programming fundamentals and basic object-oriented concepts using the latest JavaScript syntax. JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. As of 2022, 98% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.!",
      learnlist: [
        "JavaScript from scratch - beginner to advance",
        "All about variable, functions, array, objects",
        "Object Oriented Programming",
        "Project-driven learning with plenty of example",
      ],
      instructoId: 5,
      duration: 6,
    },
  ],
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
//export const { } = courseSlice.actions;

export default courseSlice.reducer;
