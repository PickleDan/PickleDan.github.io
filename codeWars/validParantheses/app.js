function validParentheses(parens) {
    const open = ['(', '{', '['];
    const close = [')', '}', ']'];
    const stack = [];
    for (let i = 0; i < parens.length; i++) {
        if (open.includes(parens[i])) {
            stack.push(parens[i]);
        } else {
            if (close.indexOf(parens[i]) == open.indexOf(stack[stack.length - 1])) {
                stack.pop();
            } else return false;
        }
    }
    console.log(stack);
    return stack.length == 0;
}
console.log(validParentheses("{{{(())}}"));