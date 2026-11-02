//* 1 ** StudentGrade and Remark System **
function studentGrade() {
  let score = Number(prompt("Enter your score (0-100):"));
  let grade;
  let remark;

  // if (score >= 70 && score <= 100) {
  // 	grade = 'A';
  // 	remark = 'Excellent!!';
  // } else if (score >= 60 && score < 70) {
  // 	grade = 'B';
  // 	remark = 'Very Good!';
  // } else if (score >= 50 && score < 60) {
  // 	grade = 'C';
  // 	remark = 'Good.';
  // } else if (score >= 45 && score < 50) {
  // 	grade = 'D';
  // 	remark = 'Pass';
  // } else if (score >= 0 && score < 45) {
  // 	grade = 'F';
  // 	remark = 'Fail.';
  // } else if (score < 0 || score > 100) {
  // 	alert('Invalid score input. Please enter a valid score between 0 and 100.');
  // 	return;
  // }	else if (score == null || score == '' || score === undefined) {
  // 	alert('User did not enter a score. Please enter a valid score between 0 and 100.');
  // 	return;
  // }
  if (score > 100) {
    alert("Invalid score");
  } else if (score >= 70) {
    grade = "A";
    remark = "Excellent!!";
  } else if (score >= 60) {
    grade = "B";
    remark = "Very Good!";
  } else if (score >= 50) {
    grade = "C";
    remark = "Good.";
  } else if (score >= 45) {
    grade = "D";
    remark = "Pass";
  } else if (score < 45) {
    grade = "F";
    remark = "Fail.";
  } else {
    alert("Invalid score");
  }

  alert(`Your grade is ${grade}. Remark(s): ${remark}`);
}

//studentGrade();

//** 2 ** ATM Transaction Validator **
function atmTransaction() {
  let withdrawal = Number(prompt("Enter amount:"));
  let balance = 50000; // Example balance, you can change this value to test different scenarios
  let minimumBalance = 1000;

  if (withdrawal > balance) {
    alert("Insufficient funds!");
  } else if (withdrawal <= 0 || isNaN(withdrawal)) {
    alert("Invalid withdrawal amount. Please enter a valid number.");
  } else {
    // balance -= withdrawal;
    if (balance - withdrawal < minimumBalance) {
      alert(`Withdrawal unsuccessful. balance can't be below ₦1000`);
    } else if (withdrawal < 1000) {
      alert(
        `Withdrawal failed: ₦${withdrawal} is not a multiple of ₦1000 ${balance}`,
      );
    } else {
      // balance -= withdrawal;
			balance = balance - withdrawal
      alert(`Withdrawal successful! 
Remaining balance: ₦${balance}`);
    }
    //alert(`Withdrawal successful. Your new balance is ${balance}.`);
  }
}
atmTransaction();
//atmTransaction(500); // Test with insufficient funds

//** 3 ** Delivery Fee Calculator */
function deliveryFeeCalculator() {
  let location = prompt(
    "Enter your location (Lagos, Abuja, Port Harcourt...):",
  ).toLowerCase();
  let orderAmount = Number(prompt("Enter the amount of your order:"));
  let deliveryFee = 0;

  switch (location) {
    case "lagos":
      if (orderAmount >= 50000) {
        deliveryFee += 0; // Free delivery fee for orders above 50,000
      } else if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 2000;
      }
      break;
    case "abuja":
      if (orderAmount >= 50000) {
        deliveryFee += 0; // Free delivery fee for orders above 50,000
      } else if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 3000;
      }
      break;
    case "enugu":
      if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 5000;
      }
      break;
    case "port harcourt":
      if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 5000;
      }
      break;
    case "kano":
      if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 5000;
      }
      break;
    case "ibadan":
      if (orderAmount <= 0 || isNaN(orderAmount)) {
        alert("Invalid order amount entered.");
        return;
      } else {
        deliveryFee = 5000;
      }
      break;
    default:
      alert("Invalid location entered.");
      return;
  }

  alert(
    `Order amount: ₦${orderAmount}. The delivery fee for ${location} is  ₦${deliveryFee}.`,
  );
}
//deliveryFeeCalculator();

//** 4 ** Employee Bonus Eligibility Checker **
function bonusEligibility() {
  let salary = Number(prompt("Enter your salary:"));
  let yearsOfService = Number(prompt("Enter your years of service:"));
  let performanceRating = Number(
    prompt("Enter your performance rating (0-100):"),
  );

  if (yearsOfService >= 2 && salary >= 200000 && performanceRating >= 70) {
    alert("Congratulations! You are eligible for a bonus.");
  } else if (
    salary < 200000 &&
    yearsOfService >= 2 &&
    performanceRating >= 70
  ) {
    alert("You are not eligible for a bonus due to salary criteria.");
    return;
  } else if (
    yearsOfService < 2 &&
    salary >= 200000 &&
    performanceRating >= 70
  ) {
    alert("You are not eligible for a bonus due to years of service criteria.");
    return;
  } else if (
    performanceRating < 70 &&
    yearsOfService >= 2 &&
    salary >= 200000
  ) {
    alert(
      "You are not eligible for a bonus due to performance rating criteria.",
    );
    return;
  } else {
    alert("You are not eligible for a bonus. None of the criteria were met.");
  }
}
//bonusEligibility();

//** 5  ** Mobile Data Subscription System **

function internetPlanPricing() {
  let plan = prompt(
    "Enter your MTN internet plan (Basic -1000, Standard -2000, Premium -5000):",
  ).toLowerCase();
  let price = 0;
  let balance = 3000; // Example balance, you can change this value to test different scenarios

  switch (plan) {
    case "basic":
      price = 1000;
      if (balance >= price) {
        balance -= price;
        alert(
          `Subscription successful. 1000 deducted for the Basic plan. Receievd - 1GB. Your new balance is - ${balance}.`,
        );
      } else {
        alert("Insufficient funds for the selected plan.");
      }
      break;
    case "standard":
      price = 2000;
      if (balance >= price) {
        balance -= price;
        alert(
          `Subscription successful. ₦${price} deducted for the Standard plan. Received - 3GB. Your new balance is - ${balance}.`,
        );
      } else {
        alert("Insufficient funds for the selected plan.");
      }
      break;
    case "premium":
      price = 5000;
      if (balance >= price) {
        balance -= price;
        alert(
          `Subscription successful. ₦${price} deducted for the Premium plan. Received - 10GB. Your new balance is - ${balance}.`,
        );
      } else {
        alert("Insufficient funds for the selected plan.");
      }
      break;
    default:
      alert("Invalid plan selected.");
      return;
  }
}

//internetPlanPricing();
