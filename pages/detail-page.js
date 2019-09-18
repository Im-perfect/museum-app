const submitComment = () => {
    const name = document.getElementById('name').value;
    const msg = document.getElementById('msg').value;

    const comment = document.createElement('section');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    if (!name || !msg || !name.trim()|| !msg.trim()) {
        alert("Please fill in the whole form.");
    }
    else {
        h3.innerHTML = `${name} said:`;
        p.innerHTML = `"${msg}"`;
        console.log(name);
        console.log(msg);
        
        comment.classList.add('comment');
        comment.appendChild(h3);
        comment.appendChild(p);

        const commentSection = document.getElementById('comments');
        commentSection.appendChild(comment);    

        name.value = null;
        msg.value = null; //why is this const value can be reassigned?
        document.getElementById('name').value = null;
        document.getElementById('msg').value = null;
    }
}