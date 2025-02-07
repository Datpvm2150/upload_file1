class Customer:
    def __init__(self, name, product, price):
        self.name = name
        self.product = product
        self.price = price

    def __str__(self):
        return f"Tên KH: {self.name}, Sản phẩm: {self.product}, Giá tiền: {self.price}"


def input_customer_info():
    customers = []
    while True:
        name = input("Nhập tên khách hàng (nhấn Enter để kết thúc): ")
        if not name:
            break
        product = input("Nhập tên sản phẩm: ")
        price = float(input("Nhập giá tiền: "))
        customer = Customer(name, product, price)
        customers.append(customer)
    return customers


def sort_customers(customers):
    return sorted(customers, key=lambda x: x.name)


def find_customers_over_1m(customers):
    return [customer for customer in customers if customer.price > 1000000]


def print_customer_list(customers):
    print("\nDanh sách khách hàng:")
    for customer in customers:
        print(customer)


def print_customers_over_1m(customers):
    print("\nDanh sách khách hàng có tiền hàng lớn hơn 1 triệu:")
    for customer in customers:
        print(customer)


def main():
    # Nhập thông tin khách hàng
    print("Nhập thông tin khách hàng:")
    customer_list = input_customer_info()

    # Sắp xếp danh sách khách hàng theo tên
    sorted_customers = sort_customers(customer_list)
    print_customer_list(sorted_customers)

    # Tìm kiếm và in ra thông tin khách hàng có tiền hàng lớn hơn 1 triệu
    customers_over_1m = find_customers_over_1m(customer_list)
    print_customers_over_1m(customers_over_1m)


if __name__ == "__main__":
    main()
