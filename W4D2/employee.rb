class Employee

    attr_reader :salary

    def initialize(name, title, salary, boss)
        @name = name
        @title = title
        @salary = salary
        @boss = boss
    end

    def bonus(multiplier)
        bonus = @salary * multiplier    
    end


end


class Manager < Employee

    def initialize
        @employees = []
    end

    def bonus(multiplier)
        total_salaries = @employees.inject(0) { |acc, e| acc + e.salary}
        total_salaries * multiplier
    end



end



