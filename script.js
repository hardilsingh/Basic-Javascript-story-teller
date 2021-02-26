
/**
 * Story 1
 */

/**
 *
 * machine story line
 * contains
 * Objects
 * arrays
 * numbers
 * booleans
 * strings
 */
const machineStoryLine = [
  "The was a machine in the scientists laboratory and you want guess whose.",
  "The machine performs miracles around the clock.",
  "But the corporate wanted to use it for their own gain.",
  "They wanted to find about the future and change it.",
  "so they decided to meet the scientist in the club",
  "To the scientist surprising they offered 10 million to him .",
  "Since the company was in many controversies regarding the safety of humanity itself.",
  "The scientist told them that tey must become what they and that was good people and satay out of controversies.",
];

const machineStory = {
  title: "A Worthy Machine",
  storyLine: machineStoryLine,
  popular: true,
  numberOfTimesRead: 0,
};

/**
 * Story 2
 */
/**
 *
 * servant story line
 * contains
 * Objects
 * arrays
 * numbers
 * booleans
 * strings
 */

const servantStoryLine = [
  "A servant with too much on his plate always.",
  "And hardened by the circumstances surrounding him.",
  "The servant had a very high level of self awareness about what he can or cannot do.",
  "Once his masters were going to a trip and the servant hoped for an encampment.",
  "So the servant begged the masters to take him with them because he had never seen camping.",
  "So he swiftly convinced his masters and they were on their way.",
  ".They were always hard on the servant and therefore must become what they never wanted to be",
];

const servantStory = {
  title: "A Hardened Servant",
  storyLine: servantStoryLine,
  popular: false,
  numberOfTimesRead: 0,
};

/**
 * Story 3
 */
/**
 *
 * puppet story line
 * contains
 * Objects
 * arrays
 * numbers
 * booleans
 * strings
 */

const puppetStoryLine = [
  "Once there was a puppet on the puppet show and he was the best.",
  "But the puppet was always defeated by his foe the other puppet that performed opposite him.",
  "The master of the puppet was hedonistic and would always treat the first puppet very harshly because he was not cute.",
  "The puppet hoped to bring despair to the master at any cost.",
  "So the puppet got his hand on an egg one day.",
  "To the masters surprise the puppet while the show was going on threw an egg at the master.",
  "The video of the incident went viral and the puppet became very famous.",
  "Bu since the heart of the puppet was pure it will now be corrupted by fame.",
  "Visit the story generator link.",
];

const puppetStory = {
  title: "A Masculine Puppet",
  storyLine: puppetStoryLine,
  popular: false,
  numberOfTimesRead: 0,
};

/** Generate storyline based on the button clicked by the user */
function generateStoryLine(story) {
  console.log(`The selected story is about ${story.toUpperCase()} with title `);

  if (story === "machine") {
    renderStoryLine(machineStory);
  } else if (story === "puppet") {
    renderStoryLine(puppetStory);
  } else if (story === "servant") {
    renderStoryLine(servantStory);
  } else {
    alert("No story Selected");
  }
}

function renderStoryLine(storyObject) {
  /** Update number of views */
  const views = changeStoryLineViews(storyObject.numberOfTimesRead);
  storyObject.numberOfTimesRead = views;

  /** Create heading node and append child in the body tag. */
  let storyBox = document.getElementById("storyGoesHere");
  let heading = document.createElement("h1");
  let title = document.createTextNode(
    `${storyObject.title} (Views: ${
      storyObject.numberOfTimesRead
    }, Popularity: ${storyObject.popular ? "Very Popular" : "Not very Popular"})`
  );
  storyBox.innerHTML = "";
  heading.appendChild(title);
  console.log(heading);
  storyBox.appendChild(heading);

  /** Looping over the array of lines in the story to print them in console and the to append p tags in the html */
  for (let index = 0; index < storyObject.storyLine.length; index++) {
    console.log(storyObject.storyLine[index]);

    let paragraph = document.createElement("p");
    let paragraphContent = document.createTextNode(
      storyObject.storyLine[index]
    );
    paragraph.appendChild(paragraphContent);

    storyBox.appendChild(paragraph);
  }
}


/** Change number of views in the object every time the button is clicked */
function changeStoryLineViews(previousViews) {
  const totalViews = previousViews + 1;
  return totalViews;
}

/** Click on any one of the buttons to generate the story line every time */
document.getElementById("machine").addEventListener("click", function () {
  generateStoryLine("machine");
});

document.getElementById("servant").addEventListener("click", function () {
  generateStoryLine("servant");
});

document.getElementById("puppet").addEventListener("click", function () {
  generateStoryLine("puppet");
});
