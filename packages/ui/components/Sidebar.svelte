<script lang="ts">
  import Dashboard from './icons/Dashboard.svelte';
  import Flag from './icons/Flag.svelte';
  import Truck from './icons/Truck.svelte';
  import Invoice from './icons/Invoice.svelte';
  import Gear from './icons/Gear.svelte';
  import Person from './icons/Person.svelte';
  import Piechart from './icons/Piechart.svelte';
  import Web from './icons/Web.svelte';

  export let activePath = '';
  export let type: 'system' | 'sales';

  $: console.log('🥶', activePath);

  $: activeDashboard = activePath.includes('/dashboard');
  $: activeCustomers = activePath.includes('/customers');
  $: activeProducers = activePath.includes('/producers');
  $: activeReports = activePath.includes('/reports');
  $: activeAdmin = activePath.includes('/admin');
  $: activeSales = activePath.includes('/sales');
  $: activeCustomersQuotes = activePath.includes('/customers-quotes');
  $: activeInvoices = activePath.includes('/invoices');
</script>

<div class="flex flex-col w-60 h-full bg-gray-800 text-gray-100 relative ml-2">
  <div class="flex-1 overflow-y-auto p-4">
    <ul class="space-y-4">
      {#if type === 'system'}
        <li>
          <a
            href="/dashboard"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeDashboard}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeDashboard}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Dashboard} />Dashboard
            </div>
          </a>
        </li>
        <li>
          <a
            href="/producers"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeProducers}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeProducers}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Flag} />Producers
            </div>
          </a>
        </li>
        <li>
          <a
            href="/customers"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeCustomers}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeCustomers}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Person} />Customers
            </div>
          </a>
        </li>
        <li>
          <a
            href="/reports"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeReports}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeReports}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Piechart} />Reports
            </div>
          </a>
        </li>
        <li>
          <a
            href="/admin"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeAdmin}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeAdmin}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Gear} />Admin
            </div>
          </a>
        </li>
      {/if}

      {#if type === 'sales'}
        <li>
          <a
            href="/dashboard"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeDashboard}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeDashboard}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Dashboard} />Dashboard
            </div>
          </a>
        </li>
        <li>
          <a
            href="/sales"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeSales}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeSales}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Truck} />Sales
            </div>
          </a>
        </li>
        <li>
          <a
            href="/customers-quotes"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeCustomersQuotes}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeCustomersQuotes}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Person} />Customers/Quotes
            </div>
          </a>
        </li>
        <li>
          <a
            href="/reports"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeReports}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeReports}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Piechart} />Reports
            </div>
          </a>
        </li>
        <li>
          <a
            href="/invoices"
            class="flex items-center hover:text-primary-500 text-md"
            class:text-primary-500={activeInvoices}
          >
            <div class="flex items-center gap-3 text-base">
              {#if activeInvoices}
                <span class="block w-[4px] h-4 bg-primary-500 absolute left-0"></span>
              {/if}
              <svelte:component this={Invoice} />Invoices
            </div>
          </a>
        </li>
      {/if}
    </ul>
    <span class="absolute bottom-4 left-4 text-xs">
      <a
        href="https://trucksuite.com"
        target="_blank"
        referrerpolicy="no-referrer"
        class="flex items-center hover:text-primary-500 text-md"
      >
        <div class="flex items-center gap-3 text-base">
          <svelte:component this={Web} />www.trucksuite.com
        </div>
      </a>
    </span>
  </div>
</div>
