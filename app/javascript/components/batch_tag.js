
// remarqeu : mettre à jour avecle type de nom des tag ; attention espace non géré ici

function generateParameters() {
  const selectedtags = [];
  document.querySelectorAll(".tag-s").forEach(tag => {
    selectedtags.push(tag.innerText);
  });
  return selectedtags;
}



function listenbatchtag() {

  const tags = document.querySelectorAll(".listenbatchtag");
  // adding click listener to each tag
  tags.forEach(tag => tag.addEventListener("click", (event) => {
    event.preventDefault();
    tag.classList.add("tag-s");
    const selectedtags = generateParameters();
    const allTagsName = selectedtags.join(" ");
    console.log(allTagsName);
    // submit the form with all the tag names including the latest
    document.querySelector(".batch_tags").value = allTagsName;

  }));
}

listenbatchtag();
