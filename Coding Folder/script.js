const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

const responses = {
    "hello": "Hi there! I am Yeobie Says, an AI chatbot designed to help you navigate through the Oberlin main website! How can I help you today?",
    "how are you?": "I'm just a bunch of code, but thanks for asking!",
    "bye": "Goodbye! Have a great day!",
};

function addMessageToChat(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message', sender);
    messageElement.innerHTML = message; // Use innerHTML to allow HTML content
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    const lowerCaseMessage = userMessage.toLowerCase();

    if (lowerCaseMessage.includes("financial aid")) {
        return "Oberlin financial aid process is designed to be transparent and supportive, aiming to make a high-quality education accessible to all students, regardless of their financial background. Oberlin is need-blind for U.S. citizens and permanent residents, meaning that your financial need will not affect your chances of admission. The college aims to provide financial aid packages that minimize or eliminate the need for student loans, focusing more on grants and work-study opportunities. Additionally, Oberlin commitment to financial accessibility is strong, and the college works hard to make sure that admitted students can attend regardless of their financial background. If you have more specific questions, such as about timelines or documentation, it’s a good idea to check Oberlin’s financial aid website. Here is the link to Oberlin Financial Aid Page: <a href='https://www.oberlin.edu/admissions-and-aid' target='_blank'>Oberlin Financial Aid</a>";
    } else if (lowerCaseMessage.includes("admissions")) {
        return " Oberlin offers multiple ways to apply, including through the Common Application, the Coalition Application, and its own Oberlin Application. It also has early decision and regular decision options. The college is not requiring standardized test scores (ACT/SAT) for applicants, which is part of its test-optional policy. Oberlin tends to look for students who demonstrate a combination of academic excellence, passion for learning, and a strong fit for its community-centered, arts-focused environment. The college is known for its diverse student body and commitment to social justice, so applicants who have interests aligned with these values often stand out. If you wish to know more about admissions, such as applications deadlines and short answer questions, Its a good idea to check out Oberlin's admissions website. Here is the link to Oberlin Admissions Page: <a href='https://www.oberlin.edu/admissions-and-aid' target='_blank'>Oberlin Admissions</a>";
    } else if (lowerCaseMessage.includes("arts and sciences")) {
        return "Oberlin College’s College of Arts and Sciences offers a comprehensive, interdisciplinary education that integrates intellectual rigor with creativity, social justice, and global awareness. With strong programs across the humanities, social sciences, natural sciences, and interdisciplinary fields, Oberlin provides a well-rounded education that prepares students for a variety of careers and graduate studies. Its unique integration with the Conservatory of Music further enriches the college’s academic environment, allowing students to pursue both artistic and academic passions. If you’re interested in combining deep academic exploration with social engagement or creative pursuits, Oberlin might be an ideal fit. Here is the link to Oberlin College of Arts and Sciences Page: <a href='https://www.oberlin.edu/arts-and-sciences' target='_blank'>Oberlin Arts and Sciences</a>";
    } else if (lowerCaseMessage.includes("conservatory")) {
        return "The Oberlin Conservatory of Music stands out for its comprehensive music education, its blend of traditional training with innovation, and its interdisciplinary approach. Whether you’re interested in performance, composition, jazz, or music production, Oberlin offers a supportive environment with world-class faculty and exceptional facilities. The opportunity to combine music with a liberal arts education further enriches the experience, preparing students for a broad range of careers in music and the arts. Here is the link to Oberlin Conseratory of Music Page: <a href='https://www.oberlin.edu/conservatory'' target='_blank'>Oberlin Conservatory of Music</a>";
	} else if (lowerCaseMessage.includes("life")) {
        return "Life at Oberlin is vibrant, inclusive, and intellectually enriching. With a strong focus on social justice, artistic expression, and academic excellence, students at Oberlin have the opportunity to pursue their passions while engaging with a supportive, open-minded community. Whether you’re interested in music, activism, creative arts, or interdisciplinary study, Oberlin offers an environment where students are encouraged to think critically, challenge norms, and make a positive impact on the world. If you have more questions regarding campus life such as, dining/meal plans, housing/residential life, and clubs/traditions, check out the Oberlin main website. Here is the link to Life at Oberlin Page: <a href='https://www.oberlin.edu/life-at-oberlin'' target='_blank'>Life at Oberlin</a>";
	} else if (lowerCaseMessage.includes("news")) {
        return "To here the latest news on Oberlin and student-planned events, check out the link the Oberlin News and Events website page: <a href='https://www.oberlin.edu/news-and-events' target='_blank'>News and Events at Oberlin</a>";
	} else if (lowerCaseMessage.includes("oberlin")) {
        return "You want to know more about Oberlin College. Here is the link to the About Oberlin Page: <a href='https://www.oberlin.edu/about-oberlin' target='_blank'>About Oberlin</a>";
	} else if (lowerCaseMessage.includes("athletics")) {
        return "Here is the link to the Oberlin Athletics Page: <a href='https://goyeo.com/' target='_blank'>Oberlin Athletics</a>";
	} else if (lowerCaseMessage.includes("not")) {
        return "That's okay, what would you like to know more about?";
	} else {
        return responses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
    }
}

sendButton.addEventListener('click', () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessageToChat(userMessage, 'user');
        userInput.value = '';

        const botResponse = getBotResponse(userMessage);
        addMessageToChat(botResponse, 'bot');
    }
});

userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        sendButton.click();
    }
});