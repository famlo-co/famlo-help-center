/**
 * DNS providers for "Connect your own domain", most-used first.
 *
 * Every link is to the provider's own help site and was opened and checked on
 * the date in `checked`. When a provider moves a page, the link-checking step
 * in the release process should catch it; replace the URL here, nowhere else.
 */

export type Registrar = {
  id: string;
  name: string;
  /** Optional short note beside the name, e.g. "Also Google Domains". */
  hostNote?: string;
  /** Where DNS settings live, in the provider's own words. */
  where: string;
  /** Provider-specific things that trip people up. Plain sentences. */
  tips: string[];
  links: {label: string; url: string}[];
};

export const checked = '2026-10-10';

// Filled from the verified registrar research by the domain guide's writer.
export const registrars: Registrar[] = [
  {
    id: 'godaddy',
    name: 'GoDaddy',
    where:
      'Sign in and open your Domain Portfolio. Select the domain to open its Domain Settings page, then select the DNS tab.',
    tips: [
      'Type www in Name for the CNAME, and @ in Name for the A record. Don’t type your whole domain.',
      'If a www record or an A record on @ is already there, edit it instead of adding a second one.',
      'Forwarding locks the A record on @. Delete it first under DNS › Forwarding.',
      'A connection to another service, such as Squarespace, also locks records. Select Remove next to its name above the records table.',
      'Leave MX and TXT records alone. Deleting them can stop your email working.',
    ],
    links: [
      {label: 'Edit a CNAME record', url: 'https://www.godaddy.com/help/edit-a-cname-record-19237'},
      {label: 'Edit an A record', url: 'https://www.godaddy.com/help/edit-an-a-record-19239'},
      {label: 'Delete DNS records', url: 'https://www.godaddy.com/help/delete-dns-records-19210'},
      {label: 'Remove domain forwarding', url: 'https://www.godaddy.com/help/remove-my-domain-forwarding-19979'},
      {label: 'Remove a connection to another service', url: 'https://www.godaddy.com/help/remove-a-connection-from-my-domain-32079'},
    ],
  },
  {
    id: 'squarespace',
    name: 'Squarespace Domains',
    hostNote: 'Also former Google Domains',
    where:
      'In the Domains dashboard, click the domain, then DNS › DNS Settings. Add your records under Custom Records with Add record.',
    tips: [
      'Delete the Squarespace Defaults first, with the trash can beside that section’s heading. Squarespace says your domain can’t point to another site while they’re in place.',
      'The CNAME’s value goes in Data. The A record’s value goes in IP Address.',
      'If you see “Conflicting domain forwarding rule”, select Manage rules, delete the rule, then add the record again.',
      'Squarespace asks for your password, or your two-factor code, before it saves a change.',
    ],
    links: [
      {label: 'Point a Squarespace domain to another site', url: 'https://support.squarespace.com/hc/en-us/articles/215744668-Pointing-a-Squarespace-domain'},
      {label: 'Edit or delete DNS records', url: 'https://support.squarespace.com/hc/en-us/articles/360002101888-Edit-your-domain-s-DNS-records'},
      {label: 'Fix DNS record conflicts', url: 'https://support.squarespace.com/hc/en-us/articles/42180412940429-DNS-record-conflicts'},
    ],
  },
  {
    id: 'namecheap',
    name: 'Namecheap',
    where:
      'Open Domain List, select Manage next to the domain, then the Advanced DNS tab. Your records are under Host Records.',
    tips: [
      'Delete Namecheap’s parking records first: the URL Redirect on @ and the www CNAME to parkingpage.namecheap.com. Use the trash bin icon.',
      'Type www or @ in Host. Namecheap adds your domain for you.',
      'Namecheap’s CNAME guide suggests a URL Redirect for @. Skip that step and add Famlo’s A record instead.',
      'Host Records only show when the domain uses Namecheap BasicDNS, PremiumDNS or FreeDNS. Otherwise, add the records wherever your nameservers point.',
      'Save each record with the green checkmark, or Save All Changes.',
    ],
    links: [
      {label: 'Connect a domain to outside hosting', url: 'https://www.namecheap.com/support/knowledgebase/article.aspx/9837/46/how-to-connect-a-domain-to-a-server-or-hosting/'},
      {label: 'Add a CNAME record', url: 'https://www.namecheap.com/support/knowledgebase/article.aspx/9646/2237/how-to-create-a-cname-record-for-your-domain/'},
      {label: 'Add an A record', url: 'https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/how-can-i-set-up-an-a-address-record-for-my-domain/'},
    ],
  },
  {
    id: 'wix',
    name: 'Wix',
    hostNote: 'Domains bought from Wix',
    where:
      'In your Wix account, go to Domains, click the Domain Actions icon next to the domain, then choose Manage DNS Records.',
    tips: [
      'For the A record, leave Host Name blank. Wix uses a blank Host Name where Famlo shows @.',
      'Type www as the Host Name for the CNAME.',
      'Change or delete Wix’s own A record and www CNAME, so each name has only Famlo’s record. Wix warns that your Wix site may go offline.',
      'You can’t move a Wix domain’s nameservers, so make the changes in Wix. If your domain was only pointed to Wix, change the records at the company you bought it from.',
      'After you select Save on a new record, select Save Changes in the pop-up.',
    ],
    links: [
      {label: 'Connect a Wix domain to an outside site', url: 'https://support.wix.com/en/article/connecting-a-wix-domain-to-an-external-site'},
      {label: 'Add, edit or delete DNS records', url: 'https://support.wix.com/en/article/managing-dns-records-in-your-wix-account'},
      {label: 'Check where your records are managed', url: 'https://support.wix.com/en/article/pointing-vs-name-servers-domain-connection-methods'},
    ],
  },
  {
    id: 'network-solutions',
    name: 'Network Solutions',
    where:
      'In Account Manager, click Domains and choose your domain. Under Advanced Tools, click Manage next to Advanced DNS Records.',
    tips: [
      'Each record has a Refers to menu. Choose www for the CNAME and @ for the A record.',
      'The CNAME’s value goes in Alias to. The A record’s value goes in Points to.',
      'If Web Forwarding is set up, delete it: Advanced Tools › Manage beside Web Forwarding, then the pencil › Delete.',
      'Advanced DNS works only while the domain uses Network Solutions’ own nameservers.',
      'Older accounts that sign in at support.web.com use Domains › manage › Advanced Settings › DNS Records instead.',
    ],
    links: [
      {label: 'Add or edit A and CNAME records', url: 'https://www.networksolutions.com/help/article/manage-dns-adns-records'},
      {label: 'Add, edit or delete records (support.web.com accounts)', url: 'https://www.networksolutions.com/help/article/manage-dns-adns-web'},
      {label: 'Remove Web Forwarding', url: 'https://www.networksolutions.com/help/article/what-is-web-forwarding'},
    ],
  },
  {
    id: 'bluehost',
    name: 'Bluehost',
    where:
      'In the Bluehost Portal, open Domains in the left-hand menu, click the domain, then the DNS tab.',
    tips: [
      'Use + Add record for each record. Change or remove an old one with its ⋮ menu: Edit or Delete.',
      'For the A record, choose @ in Refers to and paste the value in Points to.',
      'A CNAME can’t share its name with another record, so remove any old www record first.',
      'If your domain uses another company’s nameservers, change the records there instead.',
    ],
    links: [
      {label: 'Add, edit or delete DNS records', url: 'https://www.bluehost.com/help/article/dm-guide-to-the-dns-tab-in-the-account-manager'},
      {label: 'Examples of an A record on @ and a www CNAME', url: 'https://www.bluehost.com/help/article/bh-cloud-dns-management'},
    ],
  },
  {
    id: 'ionos',
    name: 'IONOS',
    where:
      'Open Menu › Domains & SSL, click the Actions menu next to the domain, then select DNS. Use Add record to add one.',
    tips: [
      'For the A record, type @ in Host name or leave it empty. Typing your whole domain creates a record for yourschool.com.yourschool.com.',
      'Keep only one A record on your main domain. Delete the old one that points to IONOS, and any AAAA record there.',
      'IONOS can’t rename a record’s host name. Add the new record, then delete the old one.',
      'If www isn’t listed, create it first under Actions › Manage subdomains.',
      'If the IONOS CDN is on for www, turn it off. It changes the www record.',
    ],
    links: [
      {label: 'Add or change an A record', url: 'https://www.ionos.com/help/domains/configuring-your-ip-address/changing-a-domains-ipv4/ipv6-address-a/aaaa-record/'},
      {label: 'Add a CNAME record', url: 'https://www.ionos.com/help/domains/configuring-cname-records-for-subdomains/configuring-a-cname-record-for-a-subdomain/'},
      {label: 'Example: an A record and a www CNAME for an outside site', url: 'https://www.ionos.com/help/domains/connecting-a-domain-with-an-external-website/connecting-your-domain-to-vercel/'},
    ],
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    where:
      'In the Cloudflare dashboard, select the domain, then open DNS › Records. Use Add record, or Edit on a record’s row.',
    tips: [
      'Set both records to DNS only (the gray cloud). Cloudflare turns its proxy on by default, and Famlo can’t see a proxied record.',
      'Delete the old www record before you add Famlo’s CNAME. Cloudflare won’t let a CNAME share its name.',
      'Delete any other A or AAAA records on @. Cloudflare allows several, so it won’t warn you.',
      'Don’t use CNAME flattening, Redirect Rules or Page Rules for your domain. They only work with the proxy on.',
      'Type www or @ as the Name, and leave TTL on Auto.',
    ],
    links: [
      {label: 'Add, edit or delete DNS records', url: 'https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-dns-records/'},
      {label: 'Turn off the proxy (DNS only)', url: 'https://developers.cloudflare.com/dns/proxy-status/'},
      {label: 'Add a record on @ (then set it to DNS only)', url: 'https://developers.cloudflare.com/dns/manage-dns-records/how-to/create-zone-apex/'},
      {label: 'Fix “a record with that name already exists”', url: 'https://developers.cloudflare.com/dns/manage-dns-records/troubleshooting/records-with-same-name/'},
    ],
  },
  {
    id: 'hostinger',
    name: 'Hostinger',
    where:
      'In hPanel, go to Domains, select Manage next to the domain, then DNS / Nameservers in the left sidebar.',
    tips: [
      'Type @ for the A record and www for the CNAME. Hostinger adds your domain for you.',
      'Delete the A records already on @, and any AAAA record there, before you add Famlo’s.',
      'Your domain may already have a www CNAME. Edit it to Famlo’s value instead of adding a second one.',
      'Turn Hostinger CDN fully off first. It also leaves a CNAME ALIAS on @, which you need to delete.',
      'Records only take effect while the domain uses Hostinger’s nameservers.',
    ],
    links: [
      {label: 'Point a domain to an outside service', url: 'https://www.hostinger.com/support/4737652-how-to-point-a-domain-to-external-services'},
      {label: 'Add, edit or delete a CNAME record', url: 'https://www.hostinger.com/support/4738777-how-to-manage-cname-records-on-hpanel'},
      {label: 'Add, edit or delete an A record', url: 'https://www.hostinger.com/support/4468886-how-to-manage-a-records'},
    ],
  },
  {
    id: 'porkbun',
    name: 'Porkbun',
    where:
      'On the Domain Management screen, click DNS under the domain’s name. Manage DNS Records opens.',
    tips: [
      'Leave Host blank for the A record. Type www as the Host for the CNAME.',
      'Delete Porkbun’s default records that point to pixie.porkbun.com first, or you’ll see “A CNAME or ALIAS record with that host already exists”.',
      'Porkbun’s guide for root domains suggests an ALIAS record. Famlo needs the A record instead.',
      'Don’t park the domain later. Parking removes the records on @ and www, including Famlo’s.',
    ],
    links: [
      {label: 'Add DNS records', url: 'https://kb.porkbun.com/article/231-how-to-add-dns-records-on-porkbun'},
      {label: 'Delete the parking records and add an A record', url: 'https://kb.porkbun.com/article/54-pointing-your-domain-to-hosting-with-a-records'},
      {label: 'Fix “a record with that host already exists”', url: 'https://kb.porkbun.com/article/239-cname-alias-record-with-that-host-already-exists-error'},
    ],
  },
  {
    id: 'name-com',
    name: 'Name.com',
    where:
      'Click MY DOMAINS, click the domain name, then Manage DNS Records under Domain Actions.',
    tips: [
      'Leave Host blank for the A record. Type www as the Host for the CNAME, and never leave Host blank on a CNAME.',
      'Name.com’s A record guide goes on to add a second record with Host *. Stop after the first one.',
      'If URL forwarding is on, turn it off. Name.com changes your A records to make forwarding work.',
      'Records here work only while the domain uses Name.com’s default nameservers.',
    ],
    links: [
      {label: 'Add a CNAME record', url: 'https://www.name.com/support/articles/115004895548-adding-a-cname-record'},
      {label: 'Add an A record', url: 'https://www.name.com/support/articles/115004893508-adding-an-a-record'},
    ],
  },
  {
    id: 'dynadot',
    name: 'Dynadot',
    where:
      'Go to My Domains › Manage Domains, tick the domain, click Action and choose DNS Settings. Pick Dynadot DNS in the menu at the top.',
    tips: [
      'Put the A record in the Domain Record section, without typing @. Choose A, not ANAME, Forward or Stealth Forward.',
      'Add the CNAME under Subdomain Records, with www as the subdomain.',
      'Dynadot’s CNAME guide sets the Domain Record to Forward, and its A record guide adds a www A record. Skip both of those steps.',
      'Nothing is saved until you click Save Settings. Don’t use Clear Settings: it deletes your email records too.',
    ],
    links: [
      {label: 'Add a CNAME record', url: 'https://www.dynadot.com/help/question/create-CNAME'},
      {label: 'Add an A record', url: 'https://www.dynadot.com/help/question/create-A-record'},
      {label: 'Set up Dynadot DNS', url: 'https://www.dynadot.com/help/question/set-up-DNS'},
    ],
  },
];
