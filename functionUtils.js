export function changeView(e, setActive) {
  if (
    e.target.textContent === "inmotion ICT HUB" ||
    e.target.textContent === "All"
  )
    setActive(1);
  else if (
    e.target.textContent === "Vision Voice INC." ||
    e.target.textContent === "React.js"
  )
    setActive(2);
  else if (
    e.target.textContent === "Jarotechnologies" ||
    e.target.textContent === "Next.js"
  )
    setActive(3);
  else if (
    (e.target.textContent === "Akumzy Lab") |
    (e.target.textContent === "Vue.js")
  )
    setActive(4);
}
