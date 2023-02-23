export const filterData = (searchInput, data) => {
    return data.filter((inputData) =>
      inputData.title.toLowerCase().includes(searchInput.toLowerCase())
    );
  };