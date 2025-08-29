## WELCOME TO ( সহজ সরল সিম্পল ) ASSIGNMENT-005

### 📅 Deadline For 60 marks: 29th August, 2025 (11:59 pm ⏱️)

### 📅 No Deadline For 50 marks

### 📅 Deadline For 30 marks: Any time after 29th August.

---

## ✅ Main Requirements (50 Marks)

### 1. Navbar

- **Website name & logo** on the left as Figma
- **Heart icon, coin count (default-100), and Copy Count** on the right as Figma

---

### 2. Hero Section

- **Background Gradient** in the Whole Section
- **A Relevant Logo** at the top-center
- **Section Title** in the center
- **A Relevant Slogan** in the bottom Center

---

### 2. Main Section

This Section will have layout as figma

<table border=1 width="100%" cellpadding="50">
<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
 </tr>
 <tr>
    <td colspan=9 >Card Section</td>
    <td colspan=3>History Section</td>
 </tr>
</table>

### Emergency Hotline Section

- **Show Minimum 6 cards**. Each card will contain:
  - Icon or Image
  - Relevant Name
  - Relevant Name in English
  - Hotline number for calling
  - Category Badge
  - 💗 icon at left
  - **2 buttons** at the bottom: Copy and Call with icons as Figma

### History Section

- **A white Background** in the whole section
- **History Title with icon** at the top-left as Figma
- **Clear History Button** at the top-right as Figma

---

### 3. Responsiveness (5 Marks)

- Website should be fully **responsive for mobile devices** (implementation up to you)

---

## Functionalities

### 4. Heart Icons

- Clicking on the 💗 **heart icon** of any card will increase the count in the Navbar

---

### 5. Call Buttons

- On clicking a card's **Call Button**, following actions will happen:
  - Show an **alert** with a message including the service name and number
  - Each call will **cut 20 coins**. Reduce Coin after each click.
  - If coins are less than 20, show a relevant alert and terminate the process.
  - Add this service into the **Call History section** with:
    - Service name
    - Service number

---

### 5. Call History Section

- Show all called services with name & number. This will empty initially. when call button clicked it will filled dynamically.
- A **Clear History button** on the right
- Clicking this button will remove all data from call history

---

## Create Readme

You have to create a `Readme.md` file. and write down following questions. Dont Try to copy paste from AI Tools. Just write what you know about these. If you don't know , then search , learn , understand and then write.

### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?

উত্তর:

১. getElementById, getElementsByClassName, আর querySelector / querySelectorAll এর মধ্যে পার্থক্য কী?

উত্তর:
getElementById হলো JavaScript-এর একটি DOM মেথড, যার মাধ্যমে কোনো নির্দিষ্ট element-কে পাওয়া যায়।
যেমন, একটি element-এর সবসময় একটি মাত্র id থাকে এবং সেই id সবসময় ইউনিক হয়।
তাই getElementById ব্যবহার করে কেবলমাত্র সেই নির্দিষ্ট id-ধারী একটিমাত্র element-কে সিলেক্ট করা যায় এবং পাওয়া যায় । যেমন: যদি কোনো element-এর id থাকে (id="id-name") এবং আমরা তা কল করি
document.getElementById('id-name') তাহলে console.log করলে আমরা ওই id-এর ভিতরের সব content (যেমন text, image, বা অন্য কোনো child element) দেখতে পাব। সুতরাং, getElementById দিয়ে আমরা শুধু কোনো একটি নির্দিষ্ট id-র element-ই পেতে পারে।
 getElementsByClassName হলো  JavaScript-এর একটি DOM মেথড, যা নির্দিষ্ট class নামধারী এক বা একাধিক element-কে খুঁজে পেতে পারে।
 querySelector হলো এমন একটি DOM মেথড, যা একই class নামধারী অনেকগুলো element-এর মধ্যে শুধু প্রথম element-টিকে সিলেক্ট করতে পারে।
querySelectorAll হলো এমন একটি DOM মেথড, যা একই class নামধারী সব element-কে সিলেক্ট করতে পারে।
 
২. কীভাবে একটি নতুন element তৈরি করে DOM-এ ঢোকানো যায়?
উত্তর:
DOM-এ আমরা একটি নতুন element তৈরি এবং insert করার জন্য কয়েকটি ধাপ সম্পন্ন করি।
createElement দিয়ে নতুন element তৈরি করি, innerHTML বা innerText ব্যবহার করে content যোগ করা, appendChild ব্যবহার করে parent element-এর ভিতরে insert করি। যেমন: প্রথমে আমরা একটি খালি container তৈরি করলাম এবং তার id দিলাম element-container। তারপর JavaScript-এ createElement দিয়ে একটি নতুন <div> তৈরি করলাম, যার নাম দিলাম newDiv। তার মধ্যে innerText দিয়েছি "Hello World"। এরপর HTML-এর খালি container যেটার id element-container ছিল, তা JavaScript-এ elementContainer নামে call করলাম। শেষে appendChild দিয়ে newDiv কে elementContainer-এর ভিতরে add করলাম। element-container হলো parent element, newDiv হলো child element,এখন child element-এর ভিতরে লেখা থাকবে "Hello World"
                                     <div id="element-container"></div>
                                     const newDiv = document.createElement('div');
                                    newDiv.innerText = "Hello World!";
                                    const elementContainer = document.getElementById('element-container');
                                    elementContainer.appendChild(newDiv);
৩. Event Bubbling কী এবং এটা কীভাবে কাজ করে?
উত্তর:
Event Bubbling হলো JS-এর একটি event propagation। এটা একেবারে নিচ থেকে উপরে উঠে, অর্থাৎ child থেকে parent --> child  parent c থেকে parent --> তারপর container --> তারপর document তারপর যদি আর কিছু থাকে তাহলে সেখানে যায়, নইতো null দেখায়। Event Bubbling কে একটি গাছকে উল্টা করে তুলনা করা যায়। যদি Event Bubbling-এর মাধ্যমে event প্রথমে পাতা, পরে ডালে, পরে গাছের মূল পর্যন্ত পৌঁছায়, ঠিক তেমনিই child থেকে parent --> parent থেকে document, অর্থাৎ একেবারে মূল পর্যন্ত পৌঁছায়। সুতরাং, Event Bubbling হলো নিচ থেকে ক্রমে উপরে ওঠা।
৪. JavaScript-এ Event Delegation কী? এটা কেন দরকারি?
উত্তর:
Event Delegation হলো এমন একটি পদ্ধতি যেখানে আমরা কোনো parent element-এ event listener বসাই, আর child element-এ আলাদা listener দেওয়ার প্রয়োজন পড়ে না। অর্থাৎ, যদি আমরা প্রতিটি child element-এ আলাদা listener দেই, তাহলে কোড অনেক বড় হয়ে যাবে এবং অপ্রত্যাশিত সমস্যা দেখা দিতে পারে। Event Delegation ব্যবহার করলে, শুধুমাত্র parent element-এ listener দিলেও আমরা child element-এর event সহজেই handle করতে পারি, কোন সমস্যা ছাড়াই। Event Delegation-কে আমরা একটি বাসার সঙ্গে তুলনা করতে পারি: parent element হলো বাসার মূল structure, child element হলো ঘরগুলো যেমন, বাসার বাইরে একটি alarm system বসালে প্রতিটি ঘরে আলাদা alarm লাগানোর দরকার নেই, ঠিক তেমনি parent element-এ listener বসালেই child element-গুলোর event handle হয়।
৫. preventDefault() আর stopPropagation() এর মধ্যে পার্থক্য কী?
উত্তর:
preventDefault() এর মাধ্যমে form submit করলে page reloading বন্ধ হয়ে যায়, অর্থাৎ preventDefault() দিয়ে default-এর প্রাথমিক কাজকে বন্ধ রাখা যায়। এবং stopPropagation() হলো এমন একটি মেথড যা event bubbling বা capturing কে বন্ধ করে দেয় অর্থাৎ, event কে child থেকে parent বা parent থেকে child পর্যন্ত ছড়ানো বন্ধ করে।

---

## 🧪 Challenges Part (10 Marks)

- On clicking the **Copy button**, show an alert and **increase the copy count** (3 Marks)

- Hotline number will be **copied on click** so it can be pasted anywhere (4 Marks)

💡Hint: You can ask for Help from `ChatGPT` Mamma . Just copy the below prompt , generate answer. use it with your own way.

```bash
I have a card with some text and a button inside it. I want that when a user clicks the button, some specific text from the card is copied to the clipboard using JavaScript. Please provide the code and explain it step by step.
```

- After clicking on the **Call button**, the **exact time of the call** will be shown in the Call History section (3 Marks)

💡Hint: Search Google with that below question

```bash
How to get current local time in js
```

---

## ⚙️ Technology Stack

- HTML
- CSS ( Vanilla , Tailwind CSS , DaisyUI , Others - wheatever you like )
- JavaScript ( Vanilla only. No Framework / Library Allowed )

---

## 📌 Rules

- ✅ Minimum **5 meaningful commits** required
- ❌ No Lorem Ipsum or dummy placeholder text. Use **relevant content only**

---

## 🔗 What to Submit

- 📂 **GitHub Repository**
- 🌐 **Live Link**

---

# Let's Code and Achieve your Dream 🎯
