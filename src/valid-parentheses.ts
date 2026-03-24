export function isValid(s: string): boolean {
    let stack: string[] = [];
    let map = new Map<string, string>([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ]);

    for (const char of s) {
        if (map.has(char)) {
            if (stack && stack[stack.length - 1] === map.get(char)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));