# 1250 => 500 2 100 2 50 1
def sol(n):
    count = 0
    coin_types = [500, 100, 50, 10]
    for coin in coin_types:
        count += n // coin
        n %= coin
    return count


print(sol(1280))
