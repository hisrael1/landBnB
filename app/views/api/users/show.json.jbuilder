# I hope I did this correctly!
# json.partial! "api/users/user", user: @user

json.extract! @user, :id, :email, :first_name, :last_name
