import 'bootstrap/dist/css/bootstrap.css';
import NavbarC from './components/NavbarC';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Patterns from './pages/Patterns';
import Guides from './pages/Guides';
import Community from './pages/Community';
import Pattern from './pages/Pattern'

const patternData = [
  {
    id: 1,
    title: "Peter the Penguin",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "1 hour",
    yarn: "Jumbo (7)",
    size: "Small", 
    image: "/images/penguin.png",
    tools: [
      "<b>Hook:</b> 6.5mm and 8mm", 
      "<b>Yarn:</b> Any colour (C), white (W), yellow (Y)",
      "<b>Safety Eyes:</b> 14mm",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Body</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> 8sc in a MR (8)",
      "<b>R2:</b> 8inc (16)",
      "<b>R3:</b> ( sc, inc ) x 8 (24)",
      "<b>R4:</b> C( 4sc ), W( 2sc ), C( 2sc ), W( 2sc ), C( 14sc ) (24)",
      "<b>R5-8:</b> C( 3sc ), W( 8sc ), C( 13sc ) (24)",
      "Secure safety eyes between R6 and R7, 3 stitches in between",
      "<b>R9:</b> C( 2sc, dec ), W( 2sc, dec, 2sc ), C( dec, ( 2sc, dec ) x 3 ) (18)",
      "Colour (C) only from now on",
      "<b>R10:</b> ( sc, dec ) x 6 (12)",
      "<b>R11:</b> 6dec (6)",
      "<br />",
      "<b>Wings</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> Ch4",
      "<b>R2:</b> 3sc",
      "<b>R3:</b> Ch1, sc, slst",
      "Sew on R7",
      "<br />",
      "<b>Feet</b>",
      "Start with yellow (Y)",
      "Use 6.5mm hook",
      "<b>R1:</b> 6sc in a MR",
      "<br />",
      "<b>Beak</b>",
      "Embroider with yellow (Y)",
      "<br />",
      "<b>Enjoy your new penguin!</b>"
    ]
  },
  {
    id: 2,
    title: "Peter the Penguin",
    type: "Animal",
    difficulty: "Easy",
    sewing: "Low",
    length: "1 hour",
    yarn: "Jumbo (7)",
    size: "Small", 
    image: "/images/penguin.png",
    tools: [
      "<b>Hook:</b> 6.5mm and 8mm", 
      "<b>Yarn:</b> Any colour (C), white (W), yellow (Y)",
      "<b>Safety Eyes:</b> 14mm",
      "<b>Stuffing</b>",
      "<b>Stitch Markers</b>",
      "<b>Scissors</b>",
      "<b>Sewing Needle</b>"
    ],
    instructions: [
      "<b>Body</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> 8sc in a MR (8)",
      "<b>R2:</b> 8inc (16)",
      "<b>R3:</b> ( sc, inc ) x 8 (24)",
      "<b>R4:</b> C( 4sc ), W( 2sc ), C( 2sc ), W( 2sc ), C( 14sc ) (24)",
      "<b>R5-8:</b> C( 3sc ), W( 8sc ), C( 13sc ) (24)",
      "Secure safety eyes between R6 and R7, 3 stitches in between",
      "<b>R9:</b> C( 2sc, dec ), W( 2sc, dec, 2sc ), C( dec, ( 2sc, dec ) x 3 ) (18)",
      "Colour (C) only from now on",
      "<b>R10:</b> ( sc, dec ) x 6 (12)",
      "<b>R11:</b> 6dec (6)",
      "<br />",
      "<b>Wings</b>",
      "Start with colour (C)",
      "Use 8mm hook",
      "<b>R1:</b> Ch4",
      "<b>R2:</b> 3sc",
      "<b>R3:</b> Ch1, sc, slst",
      "Sew on R7",
      "<br />",
      "<b>Feet</b>",
      "Start with yellow (Y)",
      "Use 6.5mm hook",
      "<b>R1:</b> 6sc in a MR",
      "<br />",
      "<b>Beak</b>",
      "Embroider with yellow (Y)",
      "<br />",
      "<b>Enjoy your new penguin!</b>"
    ]
  },
]

function App() {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patterns" element={<Patterns patternData={patternData} />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/community" element={<Community />} />
        <Route path="/pattern/:id" element={<Pattern patternData={patternData} />} />
      </Routes>
    </Router>
  );
}

export default App;
