// Subscribe button to change to subscribed when clicked
document.addEventListener("DOMContentLoaded", () => {
    const subscribe = document.querySelector(".subscribe-btn");

    subscribe.addEventListener("click", function(){
       if(subscribe.innerHTML === '<i class="ri-user-add-fill"></i> Subscribe'){
        subscribe.innerHTML = '<i class="ri-user-add-fill"></i> Subscribed';
       }else {
        subscribe.innerHTML = '<i class="ri-user-add-fill"></i> Subscribe';
       }
    
    })
} )

// Emoji Picker
document.addEventListener("DOMContentLoaded", () => {
    const pickerDiv = document.querySelector(".emoji-picker");
    const button = document.querySelector(".emoji-btn");
    const input = document.querySelector(".comment-input");

    // Create picker
    const picker = new EmojiMart.Picker({
        onEmojiSelect: emoji => {
            input.value += emoji.native;   // add emoji to text box
        }
    });

    pickerDiv.appendChild(picker);

    // Toggle picker visibility
    button.addEventListener("click", () => {
        pickerDiv.style.display = pickerDiv.style.display === "none" ? "block" : "none";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector(".comment-input");
    const pickerDiv = document.querySelector(".emoji-picker");
    const emBtn = document.querySelector(".emoji-btn");
    const cancelBtn = document.querySelector(".comment-cancel-btn");
    const commentBtn = document.querySelector(".comment-btn");

    // Initially hide picker and buttons
    emBtn.style.display = "none";
    cancelBtn.style.display = "none";
    commentBtn.style.display = "none";

    // Show buttons and picker only when input is focused
    input.addEventListener("focus", () => {
        emBtn.style.display = "block";
        cancelBtn.style.display = "inline-block";
        commentBtn.style.display = "inline-block";
    });

    // Disabling and enabling comment button
    let hasEmoji = false;
    input.addEventListener("input", () => {
        pickerDiv.addEventListener("click", () => {
            hasEmoji = true;
            commentBtn.disabled = false;
        });

        if (input.value.trim().length === 0) {
            hasEmoji = false;
            commentBtn.disabled = true;
        } else {
            commentBtn.disabled = false;
        }
    });

    // Cancel button clears input and hides everything
    cancelBtn.addEventListener("click", () => {
        input.value = "";
        hasEmoji = false;
        commentBtn.disabled = true;
        pickerDiv.style.display = "none";
        emBtn.style.display = "none";
        cancelBtn.style.display = "none";
        commentBtn.style.display = "none";
    });

    
});


document.addEventListener("DOMContentLoaded", () => {
    const commentReplyBtns = document.querySelectorAll(".Reply");

    commentReplyBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const comment = btn.closest(".comment, .reply");
            
            // Author name
            const fullText = comment.querySelector(".comment-author")?.innerText || "";
            const userName = fullText.split("•")[0].trim();

            // Ensure a replies container exists
            let repliesContainer = comment.querySelector(".replies");
            if (!repliesContainer) {
                repliesContainer = document.createElement("div");
                repliesContainer.classList.add("replies");
                comment.appendChild(repliesContainer);
            }

            // Check if reply box already exists
            let existingReplyBox = repliesContainer.querySelector(".add-reply");
            if (existingReplyBox) {
                existingReplyBox.classList.toggle("show");
                return;
            }

            // Create reply box
            const replyBox = document.createElement("div");
            replyBox.classList.add("add-reply");
            replyBox.innerHTML = `
                <div class="add-comment">
                    <img src="user.jpg" alt="User avatar" class="comment-avatar">
                    <div class="whole-comment-structure">
                        <div class="commenting-struct">
                            <input type="text" placeholder="Add a reply..." class="comment-input">
                        </div>
                        <div class="comment-actions">
                            <div>
                                <button class="emoji-btn">😊</button>
                                <div class="emoji-picker" style="display:none;"></div>
                            </div>
                            <div>
                                <button class="comment-cancel-btn">Cancel</button>
                                <button class="comment-btn" title="Submit your comment.">Comment</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Append to replies container
            repliesContainer.appendChild(replyBox);

            const input = replyBox.querySelector(".comment-input");

            // 3. Pre-fill the reply input with @username
            input.value = `${userName} `;

            // Cancel button logic
            const cancelBtn = replyBox.querySelector(".comment-cancel-btn");
            cancelBtn.addEventListener("click", () => {
                replyBox.remove();
            });
        });
    });
});

// The more button to display report flag
document.addEventListener("DOMContentLoaded", () => {
    const allMoreBtns = document.querySelectorAll(".more-icon"); // select all buttons

    allMoreBtns.forEach(btn => {
        const menu = btn.nextElementSibling; // menu is right after button

        // Toggle menu on click
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // prevent the document click from closing immediately
            // Hide all other menus first
            document.querySelectorAll(".more-menu").forEach(m => {
                if (m !== menu) m.style.display = "none";
            });

            // Toggle this menu
            menu.style.display = menu.style.display === "block" ? "none" : "block";
        });
    });

    // Close menu if click outside
    document.addEventListener("click", () => {
        document.querySelectorAll(".more-menu").forEach(menu => {
            menu.style.display = "none";
        });
    });
});



// Reply button to view sub replies.
document.addEventListener("DOMContentLoaded", () => {
// Select all 'view replies' buttons
const viewRepliesButtons = document.querySelectorAll('.view-replies');

viewRepliesButtons.forEach(button => {
    button.addEventListener('click', () => {
    // Find the replies within the same comment only
    const comment = button.closest('.comment');
    const replies = comment.querySelectorAll('.reply');

    replies.forEach(reply => reply.classList.toggle('show'));

    // Toggle button text
    button.textContent = button.textContent.includes('View')
        ? 'Hide replies'
        : 'View replies';
    });
});
});


