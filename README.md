# Data-Table-for-entering-employees-and-salaries
I started with identifying what was missing. I concluded that it was missing prompts and defining what the prompt should enter for the firstName, lastName, and salary. These all defined the data for defining the employee
Then the employees need to be pushed into the employeesArray, and then need to be sorted alphabetically.
<img width="1280" alt="Screen Shot 2024-02-22 at 11 03 32 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/838753d3-e90e-4620-b78f-0de24dcea7ea">
To display average of the salaries, I first need to get it to add them salaries up first. Then the sum will be divided by the Number of employees who were pushed into the employeesArray, which will provide the average.
I also added parseInt(monetary unit), then to .toLocaleString("en-US",{
      style:"currency", currency:"USD"
    }); in order to ensure that the currency would show up as a $USD.
This was displayed by the averageOut variable created, showed up in the console log.
<img width="1280" alt="Screen Shot 2024-02-22 at 11 04 13 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/62955c51-6acd-402e-bcde-acd141f70a3c">
<img width="1280" alt="Screen Shot 2024-02-22 at 11 04 26 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/8fa6b6a5-ca70-4795-a889-a42e618a3492">
To display a random Employee, the employees must be sorted, and then one is randomly selected, then displayed in the console log, using template literal to display their name rather than the integer that they were originally converted to.
<img width="1280" alt="Screen Shot 2024-02-22 at 11 04 37 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/40494dee-d09b-490b-83e7-105d5649f73f">
On the table, the prompt asks to enter the first name, last name, and salary each time. 
<img width="1280" alt="Screen Shot 2024-02-22 at 11 06 46 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/e4d690d2-ef4e-4a41-b214-15b0a8af5f72">
<img width="1280" alt="Screen Shot 2024-02-22 at 11 06 56 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/10ef5e80-cf47-406f-af98-288ffa267b0e">
<img width="1280" alt="Screen Shot 2024-02-22 at 11 07 05 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/bee7502f-a08f-40fa-b2f2-1702b1036eb8">
<img width="1280" alt="Screen Shot 2024-02-22 at 11 07 17 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/bc0f01f6-d44e-4e55-b4e0-46d693923796">
Then in the console, it displays the number of employees entered, along with their information. Then it also display the total sum and average of the salaries, along with the randomly selected employee.
<img width="1280" alt="Screen Shot 2024-02-22 at 11 07 35 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/a53d478a-948d-4771-88cf-f7d01432fe69">
<img width="1280" alt="Screen Shot 2024-02-22 at 11 09 01 PM" src="https://github.com/calvinyueWillTry/Data-Table-for-entering-employees-and-salaries/assets/158237430/c71ff4c0-3e9b-43a3-ba76-eb829150f4a9">
