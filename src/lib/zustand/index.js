import { create } from "zustand";

export const useAppStore = create((set) => {
  return {
    filter: "",
    themes: ["default", "rose", "voilet", "green"],
    items: [],
    invoices: [],
    sheetOpen: false,
    editedData: null,
    setEditedData(editedData) {
      return set(() => {
        return { editedData };
      });
    },
    setSheetOpen() {
      return set((state) => {
        return { sheetOpen: !state.sheetOpen };
      });
    },
    setInvoices(value, type) {
      return set((state) => {
        if (type === "static") {
          return { invoices: [...value] };
        } else if (type === "dynamic") {
          return { invoices: [...state.invoices, ...value] };
        }
      });
    },
    setFilter(value) {
      return set(() => {
        return { filter: value };
      });
    },
    setItems(value) {
      return set(() => {
        return { items: value };
      });
    },
    updateInvoices(newData) {
      return set((state) => {
        const mapped = state.invoices.map((el) => {
          if (el.id === newData.id) {
            return newData;
          } else {
            return el;
          }
        });
        return { invoices: mapped };
      });
    },
  };
});
