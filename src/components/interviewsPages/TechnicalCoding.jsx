import React from "react";
import { motion } from "framer-motion";

const codingQuestions = [
  {
    q: "Reverse a String in JavaScript",
    a: `function reverseString(str) {
  return str.split('').reverse().join('');
}`
  },
  {
    q: "Check for Palindrome in Python",
    a: `def is_palindrome(s):
  return s == s[::-1]`
  },
  {
    q: "Find the factorial of a number in Java",
    a: `int factorial(int n) {
  if(n == 0) return 1;
  return n * factorial(n - 1);
}`
  },
  {
    q: "Two Sum Problem (LeetCode)",
    a: `def two_sum(nums, target):
  lookup = {}
  for i, num in enumerate(nums):
    if target - num in lookup:
      return [lookup[target - num], i]
    lookup[num] = i`
  },
  {
    q: "Fibonacci Sequence using Recursion in JavaScript",
    a: `function fibonacci(n) {
  if(n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`
  },
  {
    q: "Find the Largest Element in an Array (C++)",
    a: `int findMax(int arr[], int n) {
  int max = arr[0];
  for(int i = 1; i < n; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max;
}`
  },
  {
    q: "Binary Search in Python",
    a: `def binary_search(arr, target):
  left, right = 0, len(arr) - 1
  while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      left = mid + 1
    else:
      right = mid - 1
  return -1`
  },
  {
    q: "Check if a Number is Prime (JavaScript)",
    a: `function isPrime(n) {
  if(n <= 1) return false;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false;
  }
  return true;
}`
  },
  {
    q: "Merge Two Sorted Arrays (Python)",
    a: `def merge_arrays(a, b):
  result = []
  i = j = 0
  while i < len(a) and j < len(b):
    if a[i] < b[j]:
      result.append(a[i])
      i += 1
    else:
      result.append(b[j])
      j += 1
  result.extend(a[i:])
  result.extend(b[j:])
  return result`
  },
  {
    q: "Balanced Parentheses using Stack (C++)",
    a: `bool isBalanced(string str) {
  stack<char> s;
  for(char c : str) {
    if(c == '(' || c == '{' || c == '[') s.push(c);
    else {
      if(s.empty()) return false;
      char top = s.top();
      if((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) return false;
      s.pop();
    }
  }
  return s.empty();
}`
  },
  {
    q: "Implement Queue using Stacks (LeetCode)",
    a: `class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    this.stack1.push(x);
  }
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}`
  },
  {
    q: "Longest Common Prefix (LeetCode)",
    a: `def longestCommonPrefix(strs):
  if not strs:
    return ""
  prefix = strs[0]
  for string in strs[1:]:
    while not string.startswith(prefix):
      prefix = prefix[:-1]
      if not prefix:
        return ""
  return prefix`
  },
  {
    q: "Find Missing Number (0 to n) (LeetCode)",
    a: `def missingNumber(nums):
  n = len(nums)
  expected_sum = n * (n + 1) // 2
  return expected_sum - sum(nums)`
  },
  {
    q: "Move Zeros to End (LeetCode)",
    a: `def moveZeroes(nums):
  last_non_zero = 0
  for i in range(len(nums)):
    if nums[i] != 0:
      nums[i], nums[last_non_zero] = nums[last_non_zero], nums[i]
      last_non_zero += 1`
  },
  {
    q: "Detect Cycle in Linked List",
    a: `def hasCycle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      return True
  return False`
  },
  {
    q: "Count Vowels in a String (JavaScript)",
    a: `function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}`
  },
  {
    q: "Valid Anagram (LeetCode)",
    a: `def isAnagram(s, t):
  return sorted(s) == sorted(t)`
  },
  {
    q: "Check Power of Two",
    a: `def isPowerOfTwo(n):
  return n > 0 and (n & (n - 1)) == 0`
  },
  {
    q: "Find GCD of Two Numbers",
    a: `def gcd(a, b):
  while b:
    a, b = b, a % b
  return a`
  },
  {
    q: "Check if Array is Sorted (JavaScript)",
    a: `function isSorted(arr) {
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) return false;
  }
  return true;
}`
  },
  {
    q: "Rotate Array by K Elements (LeetCode)",
    a: `def rotate(nums, k):
  k %= len(nums)
  nums[:] = nums[-k:] + nums[:-k]`
  },
  {
    q: "Print FizzBuzz from 1 to N",
    a: `for i in range(1, 101):
  if i % 15 == 0:
    print("FizzBuzz")
  elif i % 3 == 0:
    print("Fizz")
  elif i % 5 == 0:
    print("Buzz")
  else:
    print(i)`
  },
  {
    q: "Reverse a String in JavaScript",
    a: `function reverseString(str) {
  return str.split('').reverse().join('');
}`
  },
  {
    q: "Check for Palindrome in Python",
    a: `def is_palindrome(s):
  return s == s[::-1]`
  },
  {
    q: "Find the factorial of a number in Java",
    a: `int factorial(int n) {
  if(n == 0) return 1;
  return n * factorial(n - 1);
}`
  },
  {
    q: "Two Sum Problem (LeetCode)",
    a: `def two_sum(nums, target):
  lookup = {}
  for i, num in enumerate(nums):
    if target - num in lookup:
      return [lookup[target - num], i]
    lookup[num] = i`
  },
  {
    q: "Fibonacci Sequence using Recursion in JavaScript",
    a: `function fibonacci(n) {
  if(n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}`
  },
  {
    q: "Find the Largest Element in an Array (C++)",
    a: `int findMax(int arr[], int n) {
  int max = arr[0];
  for(int i = 1; i < n; i++) {
    if(arr[i] > max) max = arr[i];
  }
  return max;
}`
  },
  {
    q: "Binary Search in Python",
    a: `def binary_search(arr, target):
  left, right = 0, len(arr) - 1
  while left <= right:
    mid = (left + right) // 2
    if arr[mid] == target:
      return mid
    elif arr[mid] < target:
      left = mid + 1
    else:
      right = mid - 1
  return -1`
  },
  {
    q: "Check if a Number is Prime (JavaScript)",
    a: `function isPrime(n) {
  if(n <= 1) return false;
  for(let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) return false;
  }
  return true;
}`
  },
  {
    q: "Merge Two Sorted Arrays (Python)",
    a: `def merge_arrays(a, b):
  result = []
  i = j = 0
  while i < len(a) and j < len(b):
    if a[i] < b[j]:
      result.append(a[i])
      i += 1
    else:
      result.append(b[j])
      j += 1
  result.extend(a[i:])
  result.extend(b[j:])
  return result`
  },
  {
    q: "Balanced Parentheses using Stack (C++)",
    a: `bool isBalanced(string str) {
  stack<char> s;
  for(char c : str) {
    if(c == '(' || c == '{' || c == '[') s.push(c);
    else {
      if(s.empty()) return false;
      char top = s.top();
      if((c == ')' && top != '(') || (c == '}' && top != '{') || (c == ']' && top != '[')) return false;
      s.pop();
    }
  }
  return s.empty();
}`
  },
  {
    q: "Implement Queue using Stacks (LeetCode)",
    a: `class MyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(x) {
    this.stack1.push(x);
  }
  pop() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
  peek() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2[this.stack2.length - 1];
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}`
  },
  {
    q: "Longest Common Prefix (LeetCode)",
    a: `def longestCommonPrefix(strs):
  if not strs:
    return ""
  prefix = strs[0]
  for string in strs[1:]:
    while not string.startswith(prefix):
      prefix = prefix[:-1]
      if not prefix:
        return ""
  return prefix`
  },
  {
    q: "Find Missing Number (0 to n) (LeetCode)",
    a: `def missingNumber(nums):
  n = len(nums)
  expected_sum = n * (n + 1) // 2
  return expected_sum - sum(nums)`
  },
  {
    q: "Move Zeros to End (LeetCode)",
    a: `def moveZeroes(nums):
  last_non_zero = 0
  for i in range(len(nums)):
    if nums[i] != 0:
      nums[i], nums[last_non_zero] = nums[last_non_zero], nums[i]
      last_non_zero += 1`
  },
  {
    q: "Detect Cycle in Linked List",
    a: `def hasCycle(head):
  slow = fast = head
  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow == fast:
      return True
  return False`
  },
  {
    q: "Count Vowels in a String (JavaScript)",
    a: `function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}`
  },
  {
    q: "Valid Anagram (LeetCode)",
    a: `def isAnagram(s, t):
  return sorted(s) == sorted(t)`
  },
  {
    q: "Check Power of Two",
    a: `def isPowerOfTwo(n):
  return n > 0 and (n & (n - 1)) == 0`
  },
  {
    q: "Find GCD of Two Numbers",
    a: `def gcd(a, b):
  while b:
    a, b = b, a % b
  return a`
  },
  {
    q: "Check if Array is Sorted (JavaScript)",
    a: `function isSorted(arr) {
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[i-1]) return false;
  }
  return true;
}`
  },
  {
    q: "Rotate Array by K Elements (LeetCode)",
    a: `def rotate(nums, k):
  k %= len(nums)
  nums[:] = nums[-k:] + nums[:-k]`
  },
  {
    q: "Print FizzBuzz from 1 to N",
    a: `for i in range(1, 101):
  if i % 15 == 0:
    print("FizzBuzz")
  elif i % 3 == 0:
    print("Fizz")
  elif i % 5 == 0:
    print("Buzz")
  else:
    print(i)`
  }
];

const TechnicalCoding = () => {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Technical Coding Questions & Answers</h1>
      {codingQuestions.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          className="mb-6 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-xl font-semibold mb-2">Q{index + 1}: {item.q}</h2>
          <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto"><code>{item.a}</code></pre>
        </motion.div>
      ))}
    </div>
  );
};

export default TechnicalCoding;
