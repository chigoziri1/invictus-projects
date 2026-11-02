# age = input("Enter age")

# # print(age[0] + age[1])
# # sum = int(age[0]) + int(age[1])
# x = int(age[0])
# y = int(age[1])

# print(x + y)
# print()

first_name = input("first name ")
last_name = input("last name ")
age_now = int(input("Enter age "))
phone_price = int(input("phone price "))
quantity = int(input("quantity purchased "))
# total_cost = int(input("total cost "))


name = first_name.upper() + " " + last_name.upper()
length = len(name)
age = age_now + 1
total_cost = phone_price * quantity
# total_amount = total

print("Full Name: " + name)
print(f"Name length: {length}")
print(f"Age Next Year: {age}")
print(f"Phone Price: {phone_price}")
print(f"Quanity: {quantity}")
print(f"Total Cost: ${total_cost}")

print("Hello " + first_name + " " + last_name + "!" + " " + "Thank you for shopping with us.")

