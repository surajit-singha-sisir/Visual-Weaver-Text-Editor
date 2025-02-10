<template>
    <!-- TABLE MAKER -->
    <div class="text-table toolbar">
        <!-- TABLE -->
        <section class="popup-view">
            <button type="button" class="vwbtn vwbtn-default table-maker" id="table-maker" tabindex="-1"
                aria-label="Create Table" data-original-title="Create Table"><i class="m-table2"></i></button>

            <!-- TABLE POPUP -->
            <div class="table-inputs hidei" id="table-inputs">
                <input type="number" placeholder="Row" min="0" step="1">
                <input type="number" placeholder="Col" min="0" step="1">
                <button type="button" class="btn btn-primary">Add</button>
            </div>
        </section>

        <button type="button" class="vwbtn vwbtn-default quote-sign z-1" id="quote-sign" tabindex="-1"
            aria-label="Quote (CTRL+SHIFT+Q)" data-original-title="Quote (CTRL+SHIFT+Q)"><i
                class="m-quote1"></i></button>
    </div>
</template>