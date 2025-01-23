document.addEventListener("DOMContentLoaded", () => {
    const instructors = document.querySelectorAll(".instructor");

    instructors.forEach(instructor => {
        instructor.addEventListener("mouseover", () => {
            instructor.style.backgroundColor = "#e7f7e7";
        });

        instructor.addEventListener("mouseout", () => {
            instructor.style.backgroundColor = "white";
        });
    });
});
