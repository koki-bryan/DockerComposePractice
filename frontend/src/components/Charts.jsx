import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Charts = () => {
  const categories = [
    {
      id: 1,
      name: "Salary",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 2,
      name: "Freelance",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 3,
      name: "Investment",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 4,
      name: "Gift",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 5,
      name: "Refund",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 6,
      name: "Other",
      type: "income",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 7,
      name: "Housing",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 8,
      name: "Transportation",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 9,
      name: "Food & Dining",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 10,
      name: "Utilities",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 11,
      name: "Healthcare",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 12,
      name: "Entertainment",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 13,
      name: "Shopping",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 14,
      name: "Personal Care",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 15,
      name: "Education",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
    {
      id: 16,
      name: "Other",
      type: "expense",
      created_at: "2026-03-30T15:19:45.981541+08:00",
    },
  ];

  // {
  //     id: 1,
  //     name: "Salary",
  //     type: "income",
  //     created_at: "2026-03-30T15:19:45.981541+08:00",
  //   }

  const transactions = [
    { id: 1, user_id: 10, category_id: 1, amount: 8500.0, date: "2026-03-30" },
    { id: 3, user_id: 10, category_id: 7, amount: 2550.1, date: "2026-04-10" },
    { id: 4, user_id: 10, category_id: 2, amount: 850.0, date: "2026-03-31" },
    { id: 7, user_id: 10, category_id: 13, amount: 1349.4, date: "2026-03-07" },
    { id: 8, user_id: 12, category_id: 1, amount: 7499.5, date: "2026-04-08" },
    { id: 9, user_id: 10, category_id: 5, amount: 5432.1, date: "2026-03-01" },
    {
      id: 10,
      user_id: 10,
      category_id: 2,
      amount: 1000.27,
      date: "2026-04-01",
    },
    {
      id: 11,
      user_id: 10,
      category_id: 13,
      amount: 7000.0,
      date: "2026-02-08",
    },
    {
      id: 12,
      user_id: 10,
      category_id: 13,
      amount: 3499.0,
      date: "2026-02-08",
    },
    {
      id: 13,
      user_id: 10,
      category_id: 6,
      amount: 15000.0,
      date: "2026-03-08",
    },
    { id: 14, user_id: 10, category_id: 10, amount: 450.0, date: "2026-04-09" },
    {
      id: 16,
      user_id: 10,
      category_id: 11,
      amount: 890.61,
      date: "2026-04-12",
    },
    { id: 17, user_id: 10, category_id: 1, amount: 7000.0, date: "2026-04-13" },
    {
      id: 18,
      user_id: 10,
      category_id: 1,
      amount: 45000.0,
      date: "2026-02-13",
    },
    {
      id: 19,
      user_id: 10,
      category_id: 10,
      amount: 9800.0,
      date: "2026-04-13",
    },
    { id: 21, user_id: 13, category_id: 1, amount: 6587.5, date: "2026-04-13" },
    {
      id: 22,
      user_id: 14,
      category_id: 1,
      amount: 55000.67,
      date: "2026-04-13",
    },
    { id: 23, user_id: 14, category_id: 9, amount: 798.0, date: "2026-04-13" },
    {
      id: 24,
      user_id: 14,
      category_id: 7,
      amount: 12000.0,
      date: "2026-04-13",
    },
    { id: 25, user_id: 14, category_id: 8, amount: 500.0, date: "2026-04-20" },
    { id: 27, user_id: 10, category_id: 1, amount: 90.0, date: "2026-04-16" },
    { id: 28, user_id: 10, category_id: 4, amount: 89.0, date: "2026-04-16" },
    { id: 30, user_id: 17, category_id: 1, amount: 500.0, date: "2026-04-22" },
    {
      id: 31,
      user_id: 17,
      category_id: 16,
      amount: 10000.0,
      date: "2026-04-22",
    },
  ];

  // { id: 1, user_id: 10, category_id: 1, amount: 8500.0, date: "2026-03-30" },

  const categoryMap = categories.reduce((acc, cat) => {
    acc[cat.id] = cat;
    return acc;
  }, {});
console.log(categoryMap[1].type)
  const newData = transactions
    .map((t) => ({
      ...t,
      type: categoryMap[t.category_id].type,
      date: new Date(t.date).toLocaleDateString("en-PH", {
        month: "short",
        year: "numeric",
      }),
    }))
    .reduce((acc, fr) => {
      if (!acc[fr.date]) {
        acc[fr.date] = { income: 0, expense: 0 };
      }

      if (fr.type === "expense") {
        acc[fr.date].expense += fr.amount;
      } else if (fr.type === "income") {
        acc[fr.date].income += fr.amount;
      }

      return acc;
    }, {});

  const finalData = Object.entries(newData).map((prev) => ({
    ...prev[1],
    month: prev[0],
  }));

  return (
    <section className="min-h-screen bg-green-50 w-full">
      <div className="max-w-5xl p-2 bg-white rounded-md mx-auto">
        <BarChart data={finalData} width={600} height={300}>
          <Bar dataKey={"income"} fill="#50C878" />
          <Bar dataKey={"expense"} fill="#FF2C2C" />
          <CartesianGrid strokeDasharray={3,3}/>
          <XAxis dataKey={"month"}/>
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </div>
      
    </section>
  );
};

export default Charts;
