#第一题：已知做一份烤鸡需要消耗两份肉和两份蔬菜现提供三个数据输入第一个代表肉的数量第二个代表蔬菜的数量第三个代表万能石材的数量（可当作肉或蔬菜来使用）请返回最多能制作多少份烤鸡

def max_chicken_count(meat, veggies, magic_stone):
    remaining_meat = meat
    remaining_veggies = veggies
    
    # 计算没有使用万能石材的情况下可以制作多少烤鸡
    chicken_count = min(remaining_meat // 2, remaining_veggies // 2)
    remaining_meat -= chicken_count * 2
    remaining_veggies -= chicken_count * 2

    # 使用万能石材来补充不足的肉或蔬菜，使它们的数量相等
    if remaining_meat < remaining_veggies:
        needed_stone = remaining_veggies - remaining_meat
        remaining_meat += needed_stone
        magic_stone -= needed_stone
    elif remaining_veggies < remaining_meat:
        needed_stone = remaining_meat - remaining_veggies
        remaining_veggies += needed_stone
        magic_stone -= needed_stone

    # 将剩余的万能石材平均分配到肉和蔬菜
    remaining_meat += magic_stone // 2
    remaining_veggies += magic_stone // 2

    # 使用剩余的肉、蔬菜制作额外烤鸡
    extra_chicken_count = (remaining_meat + remaining_veggies) // 2
    chicken_count += extra_chicken_count

    return chicken_count

# 示例
meat = 2
veggies = 2
magic_stone = 0
print(max_chicken_count(meat, veggies, magic_stone))  # 输出应为2
