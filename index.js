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
