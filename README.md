# AddressBook

## Running the app

1. Ensure you have the latest versions of Node and NPM installed on your machine
2. Navigate to the root `address-book` directory in your favorite terminal app.
3. Run `npm install`
4. Once step 3 is completed, execute `npm start`. After compilation, the app will open in a new tab of your default browser.

## Executing unit tests

1. Ensure you have Chrome installed (necessary for Karma test runner).
2. Navigate to the root `address-book` directory in your favorite terminal app.
3. Run `npm test`
4. An instance of the Karma test runner will open in a new Chrome window and output test results

## A few words on the app

This app is built on Angular 7 with no other plugins/dependencies, per requirements. All styles are done in `.scss` format. Component styles are found in their relevant `.scss` files and global styles can be found in `src/scss`. While no style frameworks are used, I did use Material Design Icons for an icon or two. After login, some mock data is inserted into the `ContactListComponent` to show functionality without requiring tedious data entry. Contacts can be deleted with the trashcan icon that appears on hover.

The majority of the code lives in the `src/app/contacts/` feature folder, along with a few "generic" components in the `src/app/shared/` module. These components, `list` and `modal`, form the base for the component library for this app along with the global styles for base elements like `form` and `button`. As with any component library, the focus of these components is a shared level of functionality and styling while separating concerns and remaining extensible.

This is particularly true of the `modal`, which is used in two places in the app: `app/header` and `app/contacts/create-contact`. The former component uses the shared `modal` component to show the user settings modal, whereas the latter shows a much more complex form to create a contact. In both cases, all logic of showing and hiding the modal is hidden; each consumer only knows how to _tell_ the modal to open and close. The rest of what it knows is the data local to its scope and how to present that data.

With more time, I would have liked to improved some aesthetics here and there; I mostly drew the line after layout and to focus on functionality. I also would have liked to implement an app shell and perhaps a more robust theme.

Don't hesitate to contact me if you have issues running the app!