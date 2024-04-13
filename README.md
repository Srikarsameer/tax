This is a tax calculator and this site follows requirements like:
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.

![Screenshot 2024-04-11 101824](https://github.com/Srikarsameer/tax_calculator/assets/162862808/b4b72abb-5846-4a31-b89d-e1c84e4d45ae)
![Screenshot 2024-04-13 173520](https://github.com/Srikarsameer/tax_calculator/assets/162862808/24cd7afb-8bbc-4424-9fde-81a57a7e8c8e)
![Screenshot 2024-04-13 173439](https://github.com/Srikarsameer/tax_calculator/assets/162862808/6e3cce63-cc53-4bcb-8408-b82495f950e7)
![Screenshot 2024-04-13 173420](https://github.com/Srikarsameer/tax_calculator/assets/162862808/7abc741e-6d9b-499e-9126-ea54d9057aeb)
![Screenshot 2024-04-13 173534](https://github.com/Srikarsameer/tax_calculator/assets/162862808/0d4e4448-eb15-43c1-96c5-ee6d76413b2e)
![Screenshot 2024-04-13 173610](https://github.com/Srikarsameer/tax_calculator/assets/162862808/5bf8bf65-3ae7-4dc4-8425-ea4fe7465703)
![Screenshot 2024-04-13 173836](https://github.com/Srikarsameer/tax_calculator/assets/162862808/443a3ebd-c952-439d-a7a7-e7e5d58b58e4)





