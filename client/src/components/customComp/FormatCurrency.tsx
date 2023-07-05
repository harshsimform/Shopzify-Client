export const formatCurrency = (amount: number): string => {
	return amount.toLocaleString('en-US', {
		style: 'currency',
		currency: 'INR',
	});
};
