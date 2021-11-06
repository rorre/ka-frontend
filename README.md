# **Karya Angkatan (Front-end)**

## **1. Directory Structure**

### **a. Directory Tree Overview**

```
app/
   components/
      global/
         Footer/
            utils/
               *.tsx
            index.tsx
            *.tsx
         Logo/
            styles/
               *.styled.tsx
            index.tsx
            *.tsx
         Navbar/
            interfaces/
               *.interface.tsx
            index.tsx
            *.tsx
         */
      characters/
         hooks/
         */
         index.tsx
         *.tsx
      thoughts/
      passions/
   layout/
      index.tsx
   styles/
      globals.css
pages/
   characters/
      index.tsx
   thoughts/
   passions/
   _app.tsx
   index.tsx
public/
   assets/
      *.svg
   favicon.ico
```

- **app**  
  Contains app related components such as components, layout, and styles.
  - **components**  
    Must contains at least one `global/` component directory and any page related components. e.g. if your page name is `characters/` or `characters.tsx`, then its components must be stored inside `components/` directory as `characters/` directory.
  - **layout**  
    Contains layout that will wrap the app in `_app.tsx` and expected to contains only `index.tsx`, but if necessary you may added some additional layout related components here.
  - **styles**  
    Must contains only `globals.css`. If you want to add an additional styles, you may use `tailwind.config.js`, makes rule in `globals.css`, or use `styled-components`.
- **pages**  
  Must contains only page routers and never put anything inside except page files.
- **public**  
  Contains any resources that can be accessed by the outside world such an asset. Assets needed for the app can be put inside `assets/`.

### **b. Directory & File Naming Conventions**

**!!!Before you go any further, you must know that you must use `.tsx` as file naming format**  
Each component directories may only contains directory listed below:

- **interfaces**  
  Contains `*.interface.tsx` file, it is used to defines custom type annotation
- **styles**  
  Used to put `styled-components` file as `*.styled.tsx`
- **hooks**  
  If a file contains so many hooks, you may refactored it and put it inside this directory as `use*.hook.tsx`. e.g. if you're in a condition where you use so many `useState()` to handle the filter state, you may refactored it and put it as `useFilter.hook.tsx`
- **utils**  
  Usually used to put component support files. e.g. If you want to manifest your component using dummy data, you can put the data in here as `[dataName].tsx`

If you're in a conditions where you are refactoring a code and you find the code can't be put inside one of the mentioned directories above, you may create a new type of directory. But, remember, when you commit the changes, you must explain what the codes do and why you think it should be in a new directory type.

## **2. Run & Build Application**

Before using this application, remember to run

```
npm install
```

To run this program, simply run

```
npm run dev
```

To build this program, simply run

```
npm run build
```

## **3. Commit Message Conventions**

- 🛠 - commits newly created file
- 🔨 - commits newly added feature to an existing file
- 🔧 - commits newly fixed errors and bugs
- 💣 - commits newly deleted files
- ⚒ - commits breaking changes

## **4. Commit Steps**

1. Firstly, clear all warnings and errors
2. Start prettier formatting by simply run
   ```
   npm run format
   ```
3. Commit all changes with the determined message conventions
4. Wait till husky checks your committed changes
