function generateList() {
    const skills = ["HTML", "CSS", "JavaScript", "Python", "Git", "GitHub", "Chrome Dev Tools", "Command Line", "VS Code", "Notepad", "Notepad++", "Node.js", "GIMP"];
    const ul = document.getElementById("skills-list");

    skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
    });

    document.getElementById("btn-container").hidden = true;
    document.getElementById("generate-btn").hidden = true;
}

document.getElementById("generate-btn").onclick = generateList;
