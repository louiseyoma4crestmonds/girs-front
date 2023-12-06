import CloseButton from "../CloseButton";
import Backdrop from "../../molecules/Backdrop";
import styles from "./TermsAndConditions.module.css";
import { TermsProps } from "./TermsAndConditions.types";

function TermsAndConditions({ setDisplayTerms }: TermsProps): JSX.Element {
  return (
    <Backdrop>
      <div className={styles.frame}>
        <div className={styles.closeArea}>
          <CloseButton onclick={setDisplayTerms} />
        </div>

        <div className={styles.innerFrame}>
          <div className={styles.flexHorizontal}>
            <div className={styles.heading}>Terms and Conditions of</div>
            <div className={styles.heading2}>Crestlearn app</div>
          </div>
          <div className={styles.bodyText}>
            <div>These Terms govern</div>
            <ul className={styles.listDisc}>
              <li>the use of this Application, and,</li>
              <li>
                any other related Agreement or legal relationship with the Owner
                in a legally binding way. Capitalized words are defined in the
                relevant dedicated section of this document.
              </li>
            </ul>
            <div className={styles.flexCol}>
              <div>The User must read this document carefully.</div>
              <div>This Application is provided by:</div>
              <div> CrestAgile</div>
              <div className={styles.address}>
                <div>85 Great Portland Street</div>
                <div>London</div>
                <div> W1W 7LT</div>
              </div>

              <div className={styles.topMargin}>
                {" "}
                contact email: support@crestagile.com
              </div>
            </div>
            <div className={styles.divider} />
            <div>
              <div className={styles.heading}>TERMS OF USE</div>
              Unless otherwise specified, the terms of use detailed in this
              section apply generally when using this Application.
              <div>
                Single or additional conditions of use or access may apply in
                specific scenarios and in such cases are additionally indicated
                within this document. By using this Application, Users confirm
                to meet the following requirements:
              </div>
              <ul className={styles.listDisc}>
                <li>
                  {" "}
                  There are no restrictions for Users in terms of being
                  Consumers or Business Users;
                </li>
              </ul>
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Account registration</div>
            <div>
              To use the Service, Users must register or create a User account,
              providing all required data or information in a complete and
              truthful manner.
            </div>
            <div>
              Failure to do so will cause unavailability of the Service.
            </div>
            <div className={styles.topMargin} />
            <div>
              Users are responsible for keeping their login credentials
              confidential and safe. For this reason, Users are also required to
              choose passwords that meet the highest standards of strength
              permitted by this Application. By registering, Users agree to be
              fully responsible for all activities that occur under their
              username and password. Users are required to immediately and
              unambiguously inform the Owner via the contact details indicated
              in this document, if they think their personal information,
              including but not limited to User accounts, access credentials or
              personal data, have been violated, unduly disclosed or stolen.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}> Account termination</div>
            <div>
              {" "}
              Users can terminate their account and stop using the Service at
              any time by doing the following:
            </div>
            <ul className={styles.listDisc}>
              <li>
                By directly contacting the Crestlearn contact details provided
                in this document.
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              {" "}
              Account suspension and deletion
            </div>
            <div>
              The Owner reserves the right, at its sole discretion, to suspend
              or delete at any time and without notice, User accounts which it
              deems inappropriate, offensive or in violation of these Terms. The
              suspension or deletion of User accounts shall not entitle Users to
              any claims for compensation, damages or reimbursement. The
              suspension or deletion of accounts due to causes attributable to
              the User does not exempt the User from paying any applicable fees
              or prices.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Content on this Application</div>
            <div>
              Unless where otherwise specified or clearly recognizable, all
              content available on this Application is owned or provided by the
              Owner or its licensors.
            </div>
            <div>
              The Owner undertakes its utmost effort to ensure that the content
              provided on this Application infringes no applicable legal
              provisions or third-party rights. However, it may not always be
              possible to achieve such a result.
            </div>
            <div>
              In such cases, without prejudice to any legal prerogatives of
              Users to enforce their rights, Users are kindly asked to
              preferably report related complaints using the contact details
              provided in this document.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              {" "}
              Rights regarding content on this Application - All rights reserved
            </div>
            <div>
              {" "}
              The Owner holds and reserves all intellectual property rights for
              any such content. Users may not therefore use such content in any
              way that is not necessary or implicit in the proper use of the
              Service. In particular, but without limitation, Users may not
              copy, download, share (beyond the limits set forth below), modify,
              translate, transform, publish, transmit, sell, sublicense, edit,
              transfer/assign to third parties or create derivative works from
              the content available on this Application, nor allow any third
              party to do so through the User or their device, even without the
              User&apos;s knowledge. Where explicitly stated on this
              Application, the User may download, copy and/or share some content
              available through this Application for its sole personal and
              non-commercial use and provided that the copyright attributions
              and all the other attributions requested by the Owner are
              correctly implemented. Any applicable statutory limitation or
              exception to copyright shall stay unaffected.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}> Content provided by Users</div>
            <div>
              The Owner allows Users to upload, share or provide their own
              content to this Application. By providing content to this
              Application, Users confirm that they are legally allowed to do so
              and that they are not infringing any statutory provisions and/or
              third-party rights.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              {" "}
              Rights regarding content provided by Users
            </div>
            <div>
              Users acknowledge and accept that by providing their own content
              on this Application they grant the Owner a non-exclusive, fully
              paid-up and royalty-free license to process such content solely
              for the operation and maintenance of this Application as
              contractually required. To the extent permitted by applicable law,
              Users waive any moral rights in connection with content they
              provide to this Application. Users acknowledge, accept and confirm
              that all content they provide through this Application is provided
              subject to the same general conditions set forth for content on
              this Application.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Liability for provided content</div>
            <div>
              Users are solely liable for any content they upload, post, share,
              or provide through this Application. Users acknowledge and accept
              that the Owner does not filter or moderate such content. However,
              the Owner reserves the right to remove, delete, block or rectify
              such content at its own discretion and to, without prior notice,
              deny the uploading User access to this Application:
            </div>
            <ul className={styles.listDisc}>
              <li>if any complaint based on such content is received;</li>
              <li>
                if a notice of infringement of intellectual property rights is
                received;
              </li>
              <li>upon order of a public authority; or</li>
              <li>
                where the Owner is made aware that the content, while being
                accessible via this Application, may represent a risk for Users,
                third parties and/or the availability of the Service.
              </li>
            </ul>
            <div>
              {" "}
              The removal, deletion, blocking or rectification of content shall
              not entitle Users that have provided such content or that are
              liable for it, to any claims for compensation, damages or
              reimbursement. Users agree to hold the Owner harmless from and
              against any claim asserted and/or damage suffered due to content
              they provided to or provided through this Application.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}> Access to external resources</div>
            <div>
              {" "}
              Through this Application Users may have access to external
              resources provided by third parties. Users acknowledge and accept
              that the Owner has no control over such resources and is therefore
              not responsible for their content and availability. Conditions
              applicable to any resources provided by third parties, including
              those applicable to any possible grant of rights in content,
              result from each such third parties’ terms and conditions or, in
              the absence of those, applicable statutory law.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Acceptable use</div>
            <div>
              This Application and the Service may only be used within the scope
              of what they are provided for, under these Terms and applicable
              law.
            </div>
            <div>
              Users are solely responsible for making sure that their use of
              this Application and/or the Service violates no applicable law,
              regulations or third-party rights.
            </div>
            <div>
              {" "}
              Therefore, the Owner reserves the right to take any appropriate
              measure to protect its legitimate interests including by denying
              Users access to this Application or the Service, terminating
              contracts, reporting any misconduct performed through this
              Application or the Service to the competent authorities – such as
              judicial or administrative authorities - whenever Users engage or
              are suspected to engage in any of the following activities:
            </div>
            <ul className={styles.listDisc}>
              <li>violate laws, regulations and/or these Terms;</li>
              <li>infringe any third-party rights;</li>
              <li>considerably impair the Owner’s legitimate interests;</li>
              <li>offend the Owner or any third party.</li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Software license</div>
            <div>
              Any intellectual or industrial property rights, and any other
              exclusive rights on software or technical applications embedded in
              or related to this Application are held by the Owner and/or its
              licensors. Subject to Users’ compliance with and notwithstanding
              any divergent provision of these Terms, the Owner merely grants
              Users a revocable, non-exclusive, non-sublicensable and
              non-transferable license to use the software and/or any other
              technical means embedded in the Service within the scope and for
              the purposes of this Application and the Service offered.
            </div>
            <div>
              This license does not grant Users any rights to access, usage or
              disclosure of the original source code. All techniques,
              algorithms, and procedures contained in the software and any
              documentation thereto related is the Owner’s or its licensors’
              sole property.
            </div>
            All rights and license grant to Users shall immediately terminate
            upon any termination or expiration of the Agreement. Without
            prejudice to the above, under this license Users may download,
            install, use and run the software on the permitted number of
            devices, provided that such devices are common and up-to-date in
            terms of technology and market standards. The Owner reserves the
            right to release updates, fixes and further developments of this
            Application and/or its related software and to provide them to Users
            for free. Users may need to download and install such updates to
            continue using this Application and/or its related software. New
            releases may only be available against payment of a fee. The User
            may download, install, use and run the software on one device.
            <div className={styles.topMargin} />
            <div className={styles.heading2}> TERMS AND CONDITIONS OF SALE</div>
            <div className={styles.heading}>Paid Products</div>
            Some of the Products provided on this Application, as part of the
            Service, are provided on the basis of payment. The fees, duration
            and conditions applicable to the purchase of such Products are
            described below and in the dedicated sections of this Application.
            <div className={styles.topMargin} />
            <div className={styles.heading}>Product description</div>
            Prices, descriptions or availability of Products are outlined in the
            respective sections of this Application and are subject to change
            without notice. While Products on this Application are presented
            with the greatest accuracy technically possible, representation on
            this Application through any means (including, as the case may be,
            graphic material, images, colours, sounds) is for reference only and
            implies no warranty as to the characteristics of the purchased
            Product. The characteristics of the chosen Product will be outlined
            during the purchasing process.
            <div className={styles.topMargin} />
            <div className={styles.heading}>Purchasing process</div>
            Any steps taken from choosing a Product to order submission form
            part of the purchasing process. The purchasing process includes
            these steps:
            <ul className={styles.listDisc}>
              <li>
                {" "}
                Users must choose the desired Product and verify their purchase
                selection.
              </li>
              <li>
                {" "}
                After having reviewed the information displayed in the purchase
                selection, Users may place the order by submitting it.
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Order acceptance</div>
            <ul className={styles.listDisc}>
              <li>
                {" "}
                Unless the order receipt expressly includes the acceptance of
                the order, in which case the contract is therefore then entered
                into, the purchase contract is entered into at the moment the
                User receives the communication of order acceptance.
              </li>
              <li>
                {" "}
                Subject to availability and to the Owner’s discretion, the order
                shall be accepted without undue delay.
              </li>
              <li>
                {" "}
                If the order is not accepted, the Owner shall issue a refund.
              </li>
            </ul>
            <div>
              The rejection of an order shall not entitle the User to bring any
              claim against the Owner, including compensation for damages.
            </div>
            <div>
              All notifications related to the described purchasing process
              shall be sent to the email address provided by the User for such
              purposes.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Prices</div>
            <div>
              Users are informed during the purchasing process and before order
              submission, about any fees, taxes and costs (including, if any,
              delivery costs) that they will be charged.
            </div>
            <div>Prices on this Application are displayed:</div>
            <ul className={styles.listDisc}>
              <li>
                {" "}
                either exclusive or inclusive of any applicable fees, taxes and
                costs, depending on the section the User is browsing.
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Methods of payment</div>
            <div>
              Information related to accepted payment methods are made available
              during the purchasing process. Some payment methods may only be
              available subject to additional conditions or fees. In such cases
              related information can be found in the dedicated section of this
              Application. All payments are independently processed through
              third-party services. Therefore, this Application does not collect
              any payment information – such as credit card details – but only
              receives a notification once the payment has been successfully
              completed. If payment through the available methods fail or is
              refused by the payment service provider, the Owner shall be under
              no obligation to fulfil the purchase order. Any possible costs or
              fees resulting from the failed or refused payment shall be borne
              by the User.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              Payment of price in instalments
            </div>
            <div>
              Where applicable and provided, The payment of the purchase price
              may be settled in two or more instalments, within the deadlines
              specified on this Application or otherwise communicated by the
              Owner.
            </div>
            <div>
              Specific Products may be excluded from this payment model.
            </div>
            <div>
              If the User fails to meet any of the payment deadlines, the entire
              outstanding amount shall become immediately due and payable.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Retention of Product ownership</div>
            <div>
              All Crestlearn/Crestagile Products are offered as a service,
              Products shall not become the User’s property.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Retention of usage rights</div>
            <div>
              Users do not acquire any rights to use the purchased Product until
              the total purchase price is received by the Owner.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>User rights</div>
            <div className={styles.heading}>Right of withdrawal</div>
            <div>
              Unless exceptions apply, the User may be eligible to withdraw from
              the contract within the period specified below (generally 14
              days), for any reason and without justification. Users can learn
              more about the withdrawal conditions within this section.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              Who the right of withdrawal applies to
            </div>
            <div>
              Unless any applicable exception is mentioned below, Users who are
              European Consumers are granted a statutory cancellation right
              under EU rules, to withdraw from contracts entered into online
              (distance contracts) within the specified period applicable to
              their case, for any reason and without justification.
            </div>
            <div>
              Users that do not fit this qualification, cannot benefit from the
              rights described in this section.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              Exercising the right of withdrawal
            </div>
            <div>
              To exercise their right of withdrawal, Users must send to the
              Owner an unequivocal statement of their intention to withdraw from
              the contract.
            </div>
            <div>
              To this end, Users may use the model withdrawal form available
              from within the “definitions” section of this document. Users are,
              however, free to express their intention to withdraw from the
              contract by making an unequivocal statement in any other suitable
              way. In order to meet the deadline within which they can exercise
              such right, Users must send the withdrawal notice before the
              withdrawal period expires.
            </div>
            <div>When does the withdrawal period expire?</div>
            <ul className={styles.listDisc}>
              <li>
                <strong>
                  In case of purchase of a digital content not supplied in a
                  tangible medium
                </strong>
                , the withdrawal period expires 14 days after the day that the
                contract is entered into, unless the User has waived the
                withdrawal right prior to the 14 days after purchase
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Effects of withdrawal</div>
            <div>
              Users who correctly withdraw from a contract will be reimbursed by
              the Owner for all payments made to the Owner, including, if any,
              those covering the costs of delivery.
            </div>
            <div>
              However, any additional costs resulting from the choice of a
              particular delivery method other than the least expensive type of
              standard delivery offered by the Owner, will not be reimbursed.
            </div>
            <div>
              Such reimbursement shall be made without undue delay and, in any
              event, no later than 14 days from the day on which the Owner is
              informed of the User’s decision to withdraw from the contract.
              Unless otherwise agreed with the User, reimbursements will be made
              using the same means of payment as used to process the initial
              transaction. In any event, the User shall not incur any costs or
              fees as a result of such reimbursement.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Liability and indemnification</div>
            <div className={styles.heading}>US Users</div>
            <div>
              <strong>Disclaimer of Warranties</strong>
            </div>
            <div>
              This Application is provided strictly on an “as is” and “as
              available” basis. Use of the Service is at Users’ own risk. To the
              maximum extent permitted by applicable law, the Owner expressly
              disclaims all conditions, representations, and warranties —
              whether express, implied, statutory or otherwise, including, but
              not limited to, any implied warranty of merchantability, fitness
              for a particular purpose, or non-infringement of third-party
              rights. No advice or information, whether oral or written,
              obtained by user from owner or through the Service will create any
              warranty not expressly stated herein.
            </div>
            <div>
              Without limiting the foregoing, the Owner, its subsidiaries,
              affiliates, licensors, officers, directors, agents, co-branders,
              partners, suppliers and employees do not warrant that the content
              is accurate, reliable or correct; that the Service will meet
              Users’ requirements; that the Service will be available at any
              particular time or location, uninterrupted or secure; that any
              defects or errors will be corrected; or that the Service is free
              of viruses or other harmful components. Any content downloaded or
              otherwise obtained through the use of the Service is downloaded at
              users own risk and users shall be solely responsible for any
              damage to Users’ computer system or mobile device or loss of data
              that results from such download or Users’ use of the Service.
            </div>
            <div>
              The Owner does not warrant, endorse, guarantee, or assume
              responsibility for any product or service advertised or offered by
              a third party through the Service or any hyperlinked website or
              service, and the Owner shall not be a party to or in any way
              monitor any transaction between Users and third-party providers of
              products or services.
            </div>
            <div>
              The Service may become inaccessible or it may not function
              properly with Users’ web browser, mobile device, and/or operating
              system. The owner cannot be held liable for any perceived or
              actual damages arising from Service content, operation, or use of
              this Service.
            </div>
            <div>
              Federal law, some states, and other jurisdictions, do not allow
              the exclusion and limitations of certain implied warranties. The
              above exclusions may not apply to Users. This Agreement gives
              Users specific legal rights, and Users may also have other rights
              which vary from state to state. The disclaimers and exclusions
              under this agreement shall not apply to the extent prohibited by
              applicable law.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Limitations of liability</div>
            <div>
              To the maximum extent permitted by applicable law, in no event
              shall the Owner, and its subsidiaries, affiliates, officers,
              directors, agents, co-branders, partners, suppliers and employees
              be liable for
            </div>
            <ul className={styles.listDisc}>
              <li>
                {" "}
                any indirect, punitive, incidental, special, consequential or
                exemplary damages, including without limitation damages for loss
                of profits, goodwill, use, data or other intangible losses,
                arising out of or relating to the use of, or inability to use,
                the Service; and
              </li>
              <li>
                {" "}
                any damage, loss or injury resulting from hacking, tampering or
                other unauthorized access or use of the Service or User account
                or the information contained therein;
              </li>
              <li> any errors, mistakes, or inaccuracies of content;</li>
              <li>
                {" "}
                personal injury or property damage, of any nature whatsoever,
                resulting from User access to or use of the Service;
              </li>
              <li>
                {" "}
                any unauthorized access to or use of the Owner’s secure servers
                and/or any and all personal information stored therein;
              </li>
              <li>
                {" "}
                any interruption or cessation of transmission to or from the
                Service;
              </li>
              <li>
                {" "}
                any bugs, viruses, trojan horses, or the like that may be
                transmitted to or through the Service;
              </li>
              <li>
                {" "}
                any errors or omissions in any content or for any loss or damage
                incurred as a result of the use of any content posted, emailed,
                transmitted, or otherwise made available through the Service;
                and/or
              </li>
              <li>
                {" "}
                the defamatory, offensive, or illegal conduct of any User or
                third party. In no event shall the Owner, and its subsidiaries,
                affiliates, officers, directors, agents, co-branders, partners,
                suppliers and employees be liable for any claims, proceedings,
                liabilities, obligations, damages, losses or costs in an amount
                exceeding the amount paid by User to the Owner{" "}
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div>
              This limitation of liability section shall apply to the fullest
              extent permitted by law in the applicable jurisdiction whether the
              alleged liability is based on contract, tort, negligence, strict
              liability, or any other basis, even if company has been advised of
              the possibility of such damage.
            </div>
            <div>
              Some jurisdictions do not allow the exclusion or limitation of
              incidental or consequential damages, therefore the above
              limitations or exclusions may not apply to User. The terms give
              User specific legal rights, and User may also have other rights
              which vary from jurisdiction to jurisdiction. The disclaimers,
              exclusions, and limitations of liability under the terms shall not
              apply to the extent prohibited by applicable law.
            </div>
            <div>
              <strong>Indemnification</strong>
            </div>
            <div>
              The User agrees to defend, indemnify and hold the Owner and its
              subsidiaries, affiliates, officers, directors, agents,
              co-branders, partners, suppliers and employees harmless from and
              against any and all claims or demands, damages, obligations,
              losses, liabilities, costs or debt, and expenses, including, but
              not limited to, legal fees and expenses, arising from
            </div>
            <ul className={styles.listDisc}>
              <li>
                {" "}
                User’s use of and access to the Service, including any data or
                content transmitted or received by User;
              </li>
              <li>
                {" "}
                User’s violation of these terms, including, but not limited to,
                User’s breach of any of the representations and warranties set
                forth in these terms;
              </li>
              <li>
                {" "}
                User’s violation of any third-party rights, including, but not
                limited to, any right of privacy or intellectual property
                rights;
              </li>
              <li>
                {" "}
                User’s violation of any statutory law, rule, or regulation;
              </li>
              <li>
                {" "}
                any content that is submitted from User’s account, including
                third party access with User’s unique username, password or
                other security measure, if applicable, including, but not
                limited to, misleading, false, or inaccurate information;
              </li>
              <li> User’s wilful misconduct; or</li>
              <li>
                {" "}
                statutory provision by User or its affiliates, officers,
                directors, agents, co-branders, partners, suppliers and
                employees to the extent allowed by applicable law.
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              <strong>Common provisions</strong>
            </div>
            <div className={styles.heading}>No Waiver</div>
            <div>
              The Owner’s failure to assert any right or provision under these
              Terms shall not constitute a waiver of any such right or
              provision. No waiver shall be considered a further or continuing
              waiver of such term or any other term.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.topMargin} />
            <div className={styles.topMargin} />
            <div className={styles.heading}>Service interruption</div>
            <div>
              To ensure the best possible service level, the Owner reserves the
              right to interrupt the Service for maintenance, system updates or
              any other changes, informing the Users appropriately.
            </div>
            <div>
              Within the limits of law, the Owner may also decide to suspend or
              terminate the Service altogether. If the Service is terminated,
              the Owner will cooperate with Users to enable them to withdraw
              Personal Data or information in accordance with applicable law.
            </div>
            <div>
              Additionally, the Service might not be available due to reasons
              outside the Owner’s reasonable control, such as “force majeure”
              (eg. labor actions, infrastructural breakdowns or blackouts etc).
              The User agrees that the owner is not liable for any impact caused
              to them by these such service interruptions
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Service reselling</div>
            <div>
              Users may not reproduce, duplicate, copy, sell, resell or exploit
              any portion of this Application and of its Service without the
              Owner’s express prior written permission, granted either directly
              or through a legitimate reselling programme.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Privacy policy</div>
            <div>
              To learn more about the use of their Personal Data, Users may
              refer to the privacy policy of this Application.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Intellectual property rights</div>
            <div>
              Without prejudice to any more specific provision of these Terms,
              any intellectual property rights, such as copyrights, trademark
              rights, patent rights and design rights related to this
              Application are the exclusive property of the Owner or its
              licensors and are subject to the protection granted by applicable
              laws or international treaties relating to intellectual property.
            </div>
            <div>
              All trademarks — nominal or figurative — and all other marks,
              trade names, service marks, word marks, illustrations, images, or
              logos appearing in connection with this Application are, and
              remain, the exclusive property of the Owner or its licensors and
              are subject to the protection granted by applicable laws or
              international treaties related to intellectual property.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Changes to these Terms</div>
            <div>
              The Owner reserves the right to amend or otherwise modify these
              Terms at any time. In such cases, the Owner will appropriately
              inform the User of these changes.
            </div>
            <div>
              Such changes will only affect the relationship with the User for
              the future.
            </div>
            <div>
              The continued use of the Service will signify the User’s
              acceptance of the revised Terms. If Users do not wish to be bound
              by the changes, they must stop using the Service. Failure to
              accept the revised Terms, may entitle either party to terminate
              the Agreement.
            </div>
            <div>
              The applicable previous version will govern the relationship prior
              to the User&apos;s acceptance. The User can obtain any previous
              version from the Owner.
            </div>
            <div>
              If required by applicable law, the Owner will specify the date by
              which the modified Terms will enter into force.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Assignment of contract</div>
            <div>
              The Owner reserves the right to transfer, assign, dispose of by
              novation, or subcontract any or all rights or obligations under
              these Terms, taking the User’s legitimate interests into account.
              Provisions regarding changes of these Terms will apply
              accordingly.
            </div>
            <div>
              Users may not assign or transfer their rights or obligations under
              these Terms in any way, without the written permission of the
              Owner.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Contacts</div>
            <div>
              All communications relating to the use of this Application must be
              sent using the contact information stated in this document.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Severability</div>
            <div>
              Should any provision of these Terms be deemed or become invalid or
              unenforceable under applicable law, the invalidity or
              unenforceability of such provision shall not affect the validity
              of the remaining provisions, which shall remain in full force and
              effect.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>EU Users</div>
            <div>
              Should any provision of these Terms be or be deemed void, invalid
              or unenforceable, the parties shall do their best to find, in an
              amicable way, an agreement on valid and enforceable provisions
              thereby substituting the void, invalid or unenforceable parts.
            </div>
            <div>
              In case of failure to do so, the void, invalid or unenforceable
              provisions shall be replaced by the applicable statutory
              provisions, if so permitted or stated under the applicable law.
            </div>
            <div>
              Without prejudice to the above, the nullity, invalidity or the
              impossibility to enforce a particular provision of these Terms
              shall not nullify the entire Agreement, unless the severed
              provisions are essential to the Agreement, or of such importance
              that the parties would not have entered into the contract if they
              had known that the provision would not be valid, or in cases where
              the remaining provisions would translate into an unacceptable
              hardship on any of the parties.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Governing law</div>
            <div>
              These Terms are governed by the law of the place where the Owner
              is based, as disclosed in the relevant section of this document,
              without regard to conflict of laws principles.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              Exception for European Consumers
            </div>
            <div>
              However, regardless of the above, if the User qualifies as a
              European Consumer and has their habitual residence in a country
              where the law provides for a higher consumer protection standard,
              such higher standards shall prevail.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>Venue of jurisdiction</div>
            <div>
              The exclusive competence to decide on any controversy resulting
              from or connected to these Terms lies with the courts of the place
              where the Owner is based, as displayed in the relevant section of
              this document.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.heading}>
              Exception for European Consumers
            </div>
            <div>
              The above does not apply to any Users that qualify as European
              Consumers, nor to Consumers based in Switzerland, Norway or
              Iceland.
            </div>
            <div className={styles.topMargin} />
            <div className={styles.topMargin} />
            <div className={styles.heading}>Dispute resolution</div>
            <div className={styles.heading}>Amicable dispute resolution</div>
            <div>
              Users may bring any disputes to the Owner who will try to resolve
              them amicably.
            </div>
            <div>
              While Users&apos; right to take legal action shall always remain
              unaffected, in the event of any controversy regarding the use of
              this Application or the Service, The User may submit the complaint
              including a brief description and if applicable, the details of
              the related order, purchase, or account, to the Owner’s email
              address specified in this document.
            </div>
            <div>
              The Owner will process the complaint without undue delay and
              within 21 days of receiving it.
            </div>
            <ul className={styles.listDisc}>
              <li>
                {" "}
                The right of withdrawal only applies to European Consumers. The
                right of withdrawal, also commonly called the right of
                cancellation in the UK, is consistently referred to as “the
                right of withdrawal” within this document.
              </li>
              <li>
                {" "}
                Please note that some provisions in these Terms may only apply
                to certain categories of Users. In particular, certain
                provisions may only apply to Consumers or to those Users that do
                not qualify as Consumers. Such limitations are always explicitly
                mentioned within each affected clause. In the absence of any
                such mention, clauses apply to all Users.
              </li>
            </ul>
            <div className={styles.topMargin} />
            <div className={styles.topMargin} />
          </div>
        </div>
      </div>
    </Backdrop>
  );
}
export default TermsAndConditions;
